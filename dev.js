import { spawn } from 'node:child_process';

let shuttingDown = false;
let apiProcess;
let apiRestartTimer;

function shutdown(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  if (apiRestartTimer) clearTimeout(apiRestartTimer);
  for (const child of [apiProcess, viteProcess]) {
    if (!child) continue;
    if (!child.killed) child.kill();
  }
  process.exit(exitCode);
}

function startApi() {
  if (shuttingDown) return;
  apiProcess = spawn(process.execPath, ['server.js'], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });
  apiProcess.on('error', (error) => {
    console.error('Booking API failed to start:', error);
  });
  apiProcess.on('exit', (code) => {
    apiProcess = undefined;
    if (!shuttingDown) {
      console.error(`Booking API stopped${code === null ? '' : ` with exit code ${code}`}. Restarting...`);
      apiRestartTimer = setTimeout(startApi, 1000);
    }
  });
}

const viteProcess = spawn(
  process.execPath,
  ['./node_modules/vite/bin/vite.js', '--port=3000', '--host=0.0.0.0'],
  { cwd: process.cwd(), stdio: 'inherit' }
);

viteProcess.on('error', (error) => {
  console.error('Vite failed to start:', error);
  shutdown(1);
});
viteProcess.on('exit', (code) => {
  if (!shuttingDown) shutdown(code || 1);
});

startApi();
process.on('SIGINT', () => shutdown());
process.on('SIGTERM', () => shutdown());
