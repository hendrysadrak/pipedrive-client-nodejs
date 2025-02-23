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
import RelatedFollowerData from './RelatedFollowerData';

/**
 * The OrganizationDetailsGetResponseAllOfAdditionalData model module.
 * @module model/OrganizationDetailsGetResponseAllOfAdditionalData
 * @version 1.0.0
 */
class OrganizationDetailsGetResponseAllOfAdditionalData {
    /**
     * Constructs a new <code>OrganizationDetailsGetResponseAllOfAdditionalData</code>.
     * @alias module:model/OrganizationDetailsGetResponseAllOfAdditionalData
     */
    constructor() { 
        
        OrganizationDetailsGetResponseAllOfAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationDetailsGetResponseAllOfAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationDetailsGetResponseAllOfAdditionalData} obj Optional instance to populate.
     * @return {module:model/OrganizationDetailsGetResponseAllOfAdditionalData} The populated <code>OrganizationDetailsGetResponseAllOfAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationDetailsGetResponseAllOfAdditionalData();

            if (data.hasOwnProperty('followers')) {
                obj['followers'] = RelatedFollowerData.constructFromObject(data['followers']);

                delete data['followers'];
            }
            if (data.hasOwnProperty('dropbox_email')) {
                obj['dropbox_email'] = ApiClient.convertToType(data['dropbox_email'], 'String');

                delete data['dropbox_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RelatedFollowerData} followers
 */
OrganizationDetailsGetResponseAllOfAdditionalData.prototype['followers'] = undefined;

/**
 * Dropbox email for the Organization
 * @member {String} dropbox_email
 */
OrganizationDetailsGetResponseAllOfAdditionalData.prototype['dropbox_email'] = undefined;






export default OrganizationDetailsGetResponseAllOfAdditionalData;

