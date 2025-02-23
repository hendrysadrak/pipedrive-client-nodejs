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
import BaseResponse from './BaseResponse';
import ItemSearchAdditionalData from './ItemSearchAdditionalData';
import ListPersonProductsResponseAllOf from './ListPersonProductsResponseAllOf';
import ListPersonProductsResponseAllOfData from './ListPersonProductsResponseAllOfData';

/**
 * The ListPersonProductsResponse model module.
 * @module model/ListPersonProductsResponse
 * @version 1.0.0
 */
class ListPersonProductsResponse {
    /**
     * Constructs a new <code>ListPersonProductsResponse</code>.
     * @alias module:model/ListPersonProductsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListPersonProductsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListPersonProductsResponseAllOf.initialize(this);
        ListPersonProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPersonProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPersonProductsResponse} obj Optional instance to populate.
     * @return {module:model/ListPersonProductsResponse} The populated <code>ListPersonProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPersonProductsResponse();
            BaseResponse.constructFromObject(data, obj);
            ListPersonProductsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ListPersonProductsResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
ListPersonProductsResponse.prototype['success'] = undefined;

/**
 * The array of Deal Products
 * @member {Array.<module:model/ListPersonProductsResponseAllOfData>} data
 */
ListPersonProductsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
ListPersonProductsResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListPersonProductsResponseAllOf interface:
/**
 * The array of Deal Products
 * @member {Array.<module:model/ListPersonProductsResponseAllOfData>} data
 */
ListPersonProductsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
ListPersonProductsResponseAllOf.prototype['additional_data'] = undefined;




export default ListPersonProductsResponse;

