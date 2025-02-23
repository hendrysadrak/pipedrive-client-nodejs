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
import ActivityTypeObjectResponse from './ActivityTypeObjectResponse';

/**
 * The ActivityTypeListResponseAllOf model module.
 * @module model/ActivityTypeListResponseAllOf
 * @version 1.0.0
 */
class ActivityTypeListResponseAllOf {
    /**
     * Constructs a new <code>ActivityTypeListResponseAllOf</code>.
     * @alias module:model/ActivityTypeListResponseAllOf
     */
    constructor() { 
        
        ActivityTypeListResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityTypeListResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityTypeListResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ActivityTypeListResponseAllOf} The populated <code>ActivityTypeListResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTypeListResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActivityTypeObjectResponse]);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The array of ActivityTypes
 * @member {Array.<module:model/ActivityTypeObjectResponse>} data
 */
ActivityTypeListResponseAllOf.prototype['data'] = undefined;






export default ActivityTypeListResponseAllOf;

