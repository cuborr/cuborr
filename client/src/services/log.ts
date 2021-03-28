import moment from 'moment';

export enum LogLevel {
  CRITICAL = 'Critical',
  ERROR = 'Error',
  WARN = 'Warning',
  INFO = 'Information',
  DEBUG = 'Debug',
  TRACE = 'Trace',
}

export interface ExtraInfo {
  stackTrace: string;
  view: string;
  action: string;
}

export interface ILog {
  message: string;
  extraInfo?: ExtraInfo;
  level: LogLevel;
}

const logToConsole = (log: ILog): void => {
  if (log.level === LogLevel.TRACE) {
    console.trace(log.message, log.extraInfo);
  } else {
    console.log(log.message, log.extraInfo);
  }
};

const writeLogEntry = async (log: ILog): Promise<void> => {
  log.message = `[${log.level}] ${moment().toISOString(true)} ${JSON.stringify(log.message)} `;

  if (process.env.NODE_ENV === 'development') {
    logToConsole(log);
  }

  try {
    // todo log to backend
  } catch {}
};

export function trace(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.TRACE, message, extraInfo: data });
}

export function debug(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.DEBUG, message, extraInfo: data });
}

export function info(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.INFO, message, extraInfo: data });
}

export function warn(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.WARN, message, extraInfo: data });
}

export function error(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.ERROR, message, extraInfo: data });
}

export function critical(message: string, data?: ExtraInfo): void {
  writeLogEntry({ level: LogLevel.CRITICAL, message, extraInfo: data });
}
