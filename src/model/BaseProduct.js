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
import NumberBooleanDefault1 from './NumberBooleanDefault1';
import VisibleTo from './VisibleTo';

/**
 * The BaseProduct model module.
 * @module model/BaseProduct
 * @version 1.0.0
 */
class BaseProduct {
    /**
     * Constructs a new <code>BaseProduct</code>.
     * @alias module:model/BaseProduct
     */
    constructor() { 
        
        BaseProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseProduct} obj Optional instance to populate.
     * @return {module:model/BaseProduct} The populated <code>BaseProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = NumberBooleanDefault1.constructFromObject(data['active_flag']);

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = NumberBooleanDefault1.constructFromObject(data['selectable']);

                delete data['selectable'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], Object);

                delete data['owner_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product
 * @member {Number} id
 */
BaseProduct.prototype['id'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
BaseProduct.prototype['name'] = undefined;

/**
 * Product code
 * @member {String} code
 */
BaseProduct.prototype['code'] = undefined;

/**
 * The unit in which this product is sold
 * @member {String} unit
 */
BaseProduct.prototype['unit'] = undefined;

/**
 * Tax percentage
 * @member {Number} tax
 * @default 0
 */
BaseProduct.prototype['tax'] = 0;

/**
 * @member {module:model/NumberBooleanDefault1} active_flag
 */
BaseProduct.prototype['active_flag'] = undefined;

/**
 * @member {module:model/NumberBooleanDefault1} selectable
 */
BaseProduct.prototype['selectable'] = undefined;

/**
 * Visibility of the product
 * @member {module:model/VisibleTo} visible_to
 */
BaseProduct.prototype['visible_to'] = undefined;

/**
 * Information about the Pipedrive User who owns the product
 * @member {Object} owner_id
 */
BaseProduct.prototype['owner_id'] = undefined;






export default BaseProduct;

