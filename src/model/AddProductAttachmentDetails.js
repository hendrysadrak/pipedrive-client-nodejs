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
import AddProductAttachmentDetailsAllOf from './AddProductAttachmentDetailsAllOf';
import NumberBoolean from './NumberBoolean';
import ProductAttachmentDetails from './ProductAttachmentDetails';

/**
 * The AddProductAttachmentDetails model module.
 * @module model/AddProductAttachmentDetails
 * @version 1.0.0
 */
class AddProductAttachmentDetails {
    /**
     * Constructs a new <code>AddProductAttachmentDetails</code>.
     * @alias module:model/AddProductAttachmentDetails
     * @implements module:model/ProductAttachmentDetails
     * @implements module:model/AddProductAttachmentDetailsAllOf
     */
    constructor() { 
        ProductAttachmentDetails.initialize(this);AddProductAttachmentDetailsAllOf.initialize(this);
        AddProductAttachmentDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProductAttachmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProductAttachmentDetails} obj Optional instance to populate.
     * @return {module:model/AddProductAttachmentDetails} The populated <code>AddProductAttachmentDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProductAttachmentDetails();
            ProductAttachmentDetails.constructFromObject(data, obj);
            AddProductAttachmentDetailsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('item_price')) {
                obj['item_price'] = ApiClient.convertToType(data['item_price'], 'Number');

                delete data['item_price'];
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');

                delete data['quantity'];
            }
            if (data.hasOwnProperty('discount_percentage')) {
                obj['discount_percentage'] = ApiClient.convertToType(data['discount_percentage'], 'Number');

                delete data['discount_percentage'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');

                delete data['duration'];
            }
            if (data.hasOwnProperty('product_variation_id')) {
                obj['product_variation_id'] = ApiClient.convertToType(data['product_variation_id'], 'Number');

                delete data['product_variation_id'];
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');

                delete data['comments'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('enabled_flag')) {
                obj['enabled_flag'] = ApiClient.convertToType(data['enabled_flag'], NumberBoolean);

                delete data['enabled_flag'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }
            if (data.hasOwnProperty('duration_unit')) {
                obj['duration_unit'] = ApiClient.convertToType(data['duration_unit'], 'String');

                delete data['duration_unit'];
            }
            if (data.hasOwnProperty('sum_no_discount')) {
                obj['sum_no_discount'] = ApiClient.convertToType(data['sum_no_discount'], 'Number');

                delete data['sum_no_discount'];
            }
            if (data.hasOwnProperty('sum')) {
                obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');

                delete data['sum'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('last_edit')) {
                obj['last_edit'] = ApiClient.convertToType(data['last_edit'], 'String');

                delete data['last_edit'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('product_attachment_id')) {
                obj['product_attachment_id'] = ApiClient.convertToType(data['product_attachment_id'], 'Number');

                delete data['product_attachment_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Price at which this product will be added to the deal
 * @member {Number} item_price
 */
AddProductAttachmentDetails.prototype['item_price'] = undefined;

/**
 * Quantity – e.g. how many items of this product will be added to the deal
 * @member {Number} quantity
 */
AddProductAttachmentDetails.prototype['quantity'] = undefined;

/**
 * Discount %. If omitted, will be set to 0
 * @member {Number} discount_percentage
 * @default 0
 */
AddProductAttachmentDetails.prototype['discount_percentage'] = 0;

/**
 * Duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1)
 * @member {Number} duration
 * @default 1
 */
AddProductAttachmentDetails.prototype['duration'] = 1;

/**
 * ID of the product variation to use. When omitted, no variation will be used.
 * @member {Number} product_variation_id
 */
AddProductAttachmentDetails.prototype['product_variation_id'] = undefined;

/**
 * Any textual comment associated with this product-deal attachment. Visible and editable in the application UI.
 * @member {String} comments
 */
AddProductAttachmentDetails.prototype['comments'] = undefined;

/**
 * The Product tax
 * @member {Number} tax
 */
AddProductAttachmentDetails.prototype['tax'] = undefined;

/**
 * Whether the product is enabled on the deal or not. This makes it possible to add products to a deal with specific price and discount criteria - but keep them disabled, which refrains them from being included in deal price calculation. When omitted, the product will be marked as enabled by default.
 * @member {module:model/NumberBoolean} enabled_flag
 */
AddProductAttachmentDetails.prototype['enabled_flag'] = undefined;

/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} id
 */
AddProductAttachmentDetails.prototype['id'] = undefined;

/**
 * The ID of the Company
 * @member {Number} company_id
 */
AddProductAttachmentDetails.prototype['company_id'] = undefined;

/**
 * The ID of the Deal
 * @member {Number} deal_id
 */
AddProductAttachmentDetails.prototype['deal_id'] = undefined;

/**
 * The ID of the Product
 * @member {Number} product_id
 */
AddProductAttachmentDetails.prototype['product_id'] = undefined;

/**
 * The type of the duration. (For example hourly, daily, etc.)
 * @member {String} duration_unit
 */
AddProductAttachmentDetails.prototype['duration_unit'] = undefined;

/**
 * The Product sum without the discount
 * @member {Number} sum_no_discount
 */
AddProductAttachmentDetails.prototype['sum_no_discount'] = undefined;

/**
 * The sum of all the Products attached to the Deal
 * @member {Number} sum
 */
AddProductAttachmentDetails.prototype['sum'] = undefined;

/**
 * The currency associated with the Deal Product
 * @member {String} currency
 */
AddProductAttachmentDetails.prototype['currency'] = undefined;

/**
 * The date and time when the Product was added to the Deal
 * @member {String} add_time
 */
AddProductAttachmentDetails.prototype['add_time'] = undefined;

/**
 * The date and time when the Deal Product was last edited
 * @member {String} last_edit
 */
AddProductAttachmentDetails.prototype['last_edit'] = undefined;

/**
 * Boolean indicates if the Product is activated or not
 * @member {Boolean} active_flag
 */
AddProductAttachmentDetails.prototype['active_flag'] = undefined;

/**
 * The Product name
 * @member {String} name
 */
AddProductAttachmentDetails.prototype['name'] = undefined;

/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} product_attachment_id
 */
AddProductAttachmentDetails.prototype['product_attachment_id'] = undefined;


// Implement ProductAttachmentDetails interface:
/**
 * Price at which this product will be added to the deal
 * @member {Number} item_price
 */
ProductAttachmentDetails.prototype['item_price'] = undefined;
/**
 * Quantity – e.g. how many items of this product will be added to the deal
 * @member {Number} quantity
 */
ProductAttachmentDetails.prototype['quantity'] = undefined;
/**
 * Discount %. If omitted, will be set to 0
 * @member {Number} discount_percentage
 * @default 0
 */
ProductAttachmentDetails.prototype['discount_percentage'] = 0;
/**
 * Duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1)
 * @member {Number} duration
 * @default 1
 */
ProductAttachmentDetails.prototype['duration'] = 1;
/**
 * ID of the product variation to use. When omitted, no variation will be used.
 * @member {Number} product_variation_id
 */
ProductAttachmentDetails.prototype['product_variation_id'] = undefined;
/**
 * Any textual comment associated with this product-deal attachment. Visible and editable in the application UI.
 * @member {String} comments
 */
ProductAttachmentDetails.prototype['comments'] = undefined;
/**
 * The Product tax
 * @member {Number} tax
 */
ProductAttachmentDetails.prototype['tax'] = undefined;
/**
 * Whether the product is enabled on the deal or not. This makes it possible to add products to a deal with specific price and discount criteria - but keep them disabled, which refrains them from being included in deal price calculation. When omitted, the product will be marked as enabled by default.
 * @member {module:model/NumberBoolean} enabled_flag
 */
ProductAttachmentDetails.prototype['enabled_flag'] = undefined;
/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} id
 */
ProductAttachmentDetails.prototype['id'] = undefined;
/**
 * The ID of the Company
 * @member {Number} company_id
 */
ProductAttachmentDetails.prototype['company_id'] = undefined;
/**
 * The ID of the Deal
 * @member {Number} deal_id
 */
ProductAttachmentDetails.prototype['deal_id'] = undefined;
/**
 * The ID of the Product
 * @member {Number} product_id
 */
ProductAttachmentDetails.prototype['product_id'] = undefined;
/**
 * The type of the duration. (For example hourly, daily, etc.)
 * @member {String} duration_unit
 */
ProductAttachmentDetails.prototype['duration_unit'] = undefined;
/**
 * The Product sum without the discount
 * @member {Number} sum_no_discount
 */
ProductAttachmentDetails.prototype['sum_no_discount'] = undefined;
/**
 * The sum of all the Products attached to the Deal
 * @member {Number} sum
 */
ProductAttachmentDetails.prototype['sum'] = undefined;
/**
 * The currency associated with the Deal Product
 * @member {String} currency
 */
ProductAttachmentDetails.prototype['currency'] = undefined;
/**
 * The date and time when the Product was added to the Deal
 * @member {String} add_time
 */
ProductAttachmentDetails.prototype['add_time'] = undefined;
/**
 * The date and time when the Deal Product was last edited
 * @member {String} last_edit
 */
ProductAttachmentDetails.prototype['last_edit'] = undefined;
/**
 * Boolean indicates if the Product is activated or not
 * @member {Boolean} active_flag
 */
ProductAttachmentDetails.prototype['active_flag'] = undefined;
/**
 * The Product name
 * @member {String} name
 */
ProductAttachmentDetails.prototype['name'] = undefined;
// Implement AddProductAttachmentDetailsAllOf interface:
/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} product_attachment_id
 */
AddProductAttachmentDetailsAllOf.prototype['product_attachment_id'] = undefined;




export default AddProductAttachmentDetails;

