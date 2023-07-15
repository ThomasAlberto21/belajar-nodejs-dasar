import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnUncaughtExceptionCapture = true;
process.report.filename = './report.json';

function sampleError() {
  throw new Error('sample error');
}

sampleError();
