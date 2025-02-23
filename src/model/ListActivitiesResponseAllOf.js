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
import ActivityDistributionDataWithAdditionalData from './ActivityDistributionDataWithAdditionalData';
import ActivityResponseObject from './ActivityResponseObject';

/**
 * The ListActivitiesResponseAllOf model module.
 * @module model/ListActivitiesResponseAllOf
 * @version 1.0.0
 */
class ListActivitiesResponseAllOf {
    /**
     * Constructs a new <code>ListActivitiesResponseAllOf</code>.
     * @alias module:model/ListActivitiesResponseAllOf
     */
    constructor() { 
        
        ListActivitiesResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListActivitiesResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListActivitiesResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ListActivitiesResponseAllOf} The populated <code>ListActivitiesResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListActivitiesResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActivityResponseObject]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ActivityDistributionDataWithAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The array of Activities
 * @member {Array.<module:model/ActivityResponseObject>} data
 */
ListActivitiesResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/ActivityDistributionDataWithAdditionalData} additional_data
 */
ListActivitiesResponseAllOf.prototype['additional_data'] = undefined;






export default ListActivitiesResponseAllOf;

