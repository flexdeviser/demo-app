// import { LOG } from '../utils/logger';

import { getLogger } from '../utils/logger';

const meter_reads = (device: Device, input: any): boolean => {
  const log = getLogger();

  log.info('hello: {}', device.getName());

  return true;
};
export { meter_reads }