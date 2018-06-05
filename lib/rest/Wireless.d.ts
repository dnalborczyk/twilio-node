/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V1 = require('./wireless/V1');
import { CommandListInstance } from './wireless/v1/command';
import { RatePlanListInstance } from './wireless/v1/ratePlan';
import { SimListInstance } from './wireless/v1/sim';


/**
 * Initialize wireless domain
 */
declare class Wireless extends Domain {
  /**
   * Initialize wireless domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * Command resource
   */
  readonly commands: CommandListInstance;
  /**
   * RatePlan resource
   */
  readonly ratePlans: RatePlanListInstance;
  /**
   * Sim resource
   */
  readonly sims: SimListInstance;
  readonly v1: V1;
}

export = Wireless;