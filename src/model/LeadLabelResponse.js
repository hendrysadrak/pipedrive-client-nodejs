/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LeadLabelColor from './LeadLabelColor';

/**
 * The LeadLabelResponse model module.
 * @module model/LeadLabelResponse
 * @version 1.0.0
 */
class LeadLabelResponse {
    /**
     * Constructs a new <code>LeadLabelResponse</code>.
     * @alias module:model/LeadLabelResponse
     */
    constructor() { 
        
        LeadLabelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadLabelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadLabelResponse} obj Optional instance to populate.
     * @return {module:model/LeadLabelResponse} The populated <code>LeadLabelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadLabelResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = LeadLabelColor.constructFromObject(data['color']);

                delete data['color'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The unique ID of the Lead Label
 * @member {String} id
 */
LeadLabelResponse.prototype['id'] = undefined;

/**
 * The name of the Lead Label
 * @member {String} name
 */
LeadLabelResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LeadLabelColor} color
 */
LeadLabelResponse.prototype['color'] = undefined;

/**
 * The date and time of when the Lead Label was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {Date} add_time
 */
LeadLabelResponse.prototype['add_time'] = undefined;

/**
 * The date and time of when the Lead Label was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {Date} update_time
 */
LeadLabelResponse.prototype['update_time'] = undefined;






export default LeadLabelResponse;

