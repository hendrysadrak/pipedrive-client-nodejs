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
import ListProductAdditionalData from './ListProductAdditionalData';
import ListProductsResponseAllOfData from './ListProductsResponseAllOfData';
import ListProductsResponseAllOfRelatedObjects from './ListProductsResponseAllOfRelatedObjects';

/**
 * The ListProductsResponseAllOf model module.
 * @module model/ListProductsResponseAllOf
 * @version 1.0.0
 */
class ListProductsResponseAllOf {
    /**
     * Constructs a new <code>ListProductsResponseAllOf</code>.
     * @alias module:model/ListProductsResponseAllOf
     */
    constructor() { 
        
        ListProductsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ListProductsResponseAllOf} The populated <code>ListProductsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductsResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ListProductsResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ListProductAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = ListProductsResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/ListProductsResponseAllOfData} data
 */
ListProductsResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/ListProductAdditionalData} additional_data
 */
ListProductsResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/ListProductsResponseAllOfRelatedObjects} related_objects
 */
ListProductsResponseAllOf.prototype['related_objects'] = undefined;






export default ListProductsResponseAllOf;

