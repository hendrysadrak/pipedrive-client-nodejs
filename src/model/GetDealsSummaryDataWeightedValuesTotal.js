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

/**
 * The GetDealsSummaryDataWeightedValuesTotal model module.
 * @module model/GetDealsSummaryDataWeightedValuesTotal
 * @version 1.0.0
 */
class GetDealsSummaryDataWeightedValuesTotal {
    /**
     * Constructs a new <code>GetDealsSummaryDataWeightedValuesTotal</code>.
     * The total weighted values of the Deals grouped by Deal currency. The weighted value is calculated as probability times Deal value.
     * @alias module:model/GetDealsSummaryDataWeightedValuesTotal
     */
    constructor() { 
        
        GetDealsSummaryDataWeightedValuesTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDealsSummaryDataWeightedValuesTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDealsSummaryDataWeightedValuesTotal} obj Optional instance to populate.
     * @return {module:model/GetDealsSummaryDataWeightedValuesTotal} The populated <code>GetDealsSummaryDataWeightedValuesTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDealsSummaryDataWeightedValuesTotal();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');

                delete data['count'];
            }
            if (data.hasOwnProperty('value_formatted')) {
                obj['value_formatted'] = ApiClient.convertToType(data['value_formatted'], 'String');

                delete data['value_formatted'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The total weighted value of the Deals in the Deal currency group
 * @member {Number} value
 */
GetDealsSummaryDataWeightedValuesTotal.prototype['value'] = undefined;

/**
 * The number of Deals in the Deal currency group
 * @member {Number} count
 */
GetDealsSummaryDataWeightedValuesTotal.prototype['count'] = undefined;

/**
 * The total weighted value of the Deals formatted with Deal currency. E.g. €50
 * @member {String} value_formatted
 */
GetDealsSummaryDataWeightedValuesTotal.prototype['value_formatted'] = undefined;






export default GetDealsSummaryDataWeightedValuesTotal;

