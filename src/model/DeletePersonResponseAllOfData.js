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
 * The DeletePersonResponseAllOfData model module.
 * @module model/DeletePersonResponseAllOfData
 * @version 1.0.0
 */
class DeletePersonResponseAllOfData {
    /**
     * Constructs a new <code>DeletePersonResponseAllOfData</code>.
     * @alias module:model/DeletePersonResponseAllOfData
     */
    constructor() { 
        
        DeletePersonResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePersonResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletePersonResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/DeletePersonResponseAllOfData} The populated <code>DeletePersonResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePersonResponseAllOfData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deleted Person
 * @member {Number} id
 */
DeletePersonResponseAllOfData.prototype['id'] = undefined;






export default DeletePersonResponseAllOfData;

