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
import NewProductField from './NewProductField';
import ProductFieldAllOf from './ProductFieldAllOf';

/**
 * The ProductField model module.
 * @module model/ProductField
 * @version 1.0.0
 */
class ProductField {
    /**
     * Constructs a new <code>ProductField</code>.
     * @alias module:model/ProductField
     * @implements module:model/NewProductField
     * @implements module:model/ProductFieldAllOf
     * @param name {String} Name of the field
     * @param fieldType {module:model/ProductField.FieldTypeEnum} Type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
     */
    constructor(name, fieldType) { 
        NewProductField.initialize(this, name, fieldType);ProductFieldAllOf.initialize(this);
        ProductField.initialize(this, name, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, fieldType) { 
        obj['name'] = name;
        obj['field_type'] = fieldType;
    }

    /**
     * Constructs a <code>ProductField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductField} obj Optional instance to populate.
     * @return {module:model/ProductField} The populated <code>ProductField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductField();
            NewProductField.constructFromObject(data, obj);
            ProductFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);

                delete data['options'];
            }
            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');

                delete data['field_type'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');

                delete data['key'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('last_updated_by_user_id')) {
                obj['last_updated_by_user_id'] = ApiClient.convertToType(data['last_updated_by_user_id'], 'Number');

                delete data['last_updated_by_user_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('edit_flag')) {
                obj['edit_flag'] = ApiClient.convertToType(data['edit_flag'], 'Boolean');

                delete data['edit_flag'];
            }
            if (data.hasOwnProperty('add_visible_flag')) {
                obj['add_visible_flag'] = ApiClient.convertToType(data['add_visible_flag'], 'Boolean');

                delete data['add_visible_flag'];
            }
            if (data.hasOwnProperty('important_flag')) {
                obj['important_flag'] = ApiClient.convertToType(data['important_flag'], 'Boolean');

                delete data['important_flag'];
            }
            if (data.hasOwnProperty('bulk_edit_allowed')) {
                obj['bulk_edit_allowed'] = ApiClient.convertToType(data['bulk_edit_allowed'], 'Boolean');

                delete data['bulk_edit_allowed'];
            }
            if (data.hasOwnProperty('searchable_flag')) {
                obj['searchable_flag'] = ApiClient.convertToType(data['searchable_flag'], 'Boolean');

                delete data['searchable_flag'];
            }
            if (data.hasOwnProperty('filtering_allowed')) {
                obj['filtering_allowed'] = ApiClient.convertToType(data['filtering_allowed'], 'Boolean');

                delete data['filtering_allowed'];
            }
            if (data.hasOwnProperty('sortable_flag')) {
                obj['sortable_flag'] = ApiClient.convertToType(data['sortable_flag'], 'Boolean');

                delete data['sortable_flag'];
            }
            if (data.hasOwnProperty('mandatory_flag')) {
                obj['mandatory_flag'] = ApiClient.convertToType(data['mandatory_flag'], 'Boolean');

                delete data['mandatory_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Name of the field
 * @member {String} name
 */
ProductField.prototype['name'] = undefined;

/**
 * When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`
 * @member {Array.<Object>} options
 */
ProductField.prototype['options'] = undefined;

/**
 * Type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
 * @member {module:model/ProductField.FieldTypeEnum} field_type
 */
ProductField.prototype['field_type'] = undefined;

/**
 * The ID of the Product Field
 * @member {Number} id
 */
ProductField.prototype['id'] = undefined;

/**
 * The key of the Product Field
 * @member {String} key
 */
ProductField.prototype['key'] = undefined;

/**
 * Position (index) of the Product Field in the detail view
 * @member {Number} order_nr
 */
ProductField.prototype['order_nr'] = undefined;

/**
 * The Product Field creation time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
ProductField.prototype['add_time'] = undefined;

/**
 * The Product Field last update time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
ProductField.prototype['update_time'] = undefined;

/**
 * The ID of the last user to update the Product Field
 * @member {Number} last_updated_by_user_id
 */
ProductField.prototype['last_updated_by_user_id'] = undefined;

/**
 * Whether or not the Product Field is currently active
 * @member {Boolean} active_flag
 */
ProductField.prototype['active_flag'] = undefined;

/**
 * Whether or not the Product Field Name and metadata is editable
 * @member {Boolean} edit_flag
 */
ProductField.prototype['edit_flag'] = undefined;

/**
 * Whether or not the Product Field is visible in the Add Product Modal
 * @member {Boolean} add_visible_flag
 */
ProductField.prototype['add_visible_flag'] = undefined;

/**
 * Whether or not the Product Field is marked as important
 * @member {Boolean} important_flag
 */
ProductField.prototype['important_flag'] = undefined;

/**
 * Whether or not the Product Field data can be edited
 * @member {Boolean} bulk_edit_allowed
 */
ProductField.prototype['bulk_edit_allowed'] = undefined;

/**
 * Whether or not the Product Field is searchable
 * @member {Boolean} searchable_flag
 */
ProductField.prototype['searchable_flag'] = undefined;

/**
 * Whether or not the Product Field value can be used when filtering searches
 * @member {Boolean} filtering_allowed
 */
ProductField.prototype['filtering_allowed'] = undefined;

/**
 * Whether or not the Product Field is sortable
 * @member {Boolean} sortable_flag
 */
ProductField.prototype['sortable_flag'] = undefined;

/**
 * Whether or not the Product Field is mandatory when creating products
 * @member {Boolean} mandatory_flag
 */
ProductField.prototype['mandatory_flag'] = undefined;


// Implement NewProductField interface:
/**
 * Name of the field
 * @member {String} name
 */
NewProductField.prototype['name'] = undefined;
/**
 * When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{\"label\":\"red\"}, {\"label\":\"blue\"}, {\"label\":\"lilac\"}]`
 * @member {Array.<Object>} options
 */
NewProductField.prototype['options'] = undefined;
/**
 * Type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
 * @member {module:model/NewProductField.FieldTypeEnum} field_type
 */
NewProductField.prototype['field_type'] = undefined;
// Implement ProductFieldAllOf interface:
/**
 * The ID of the Product Field
 * @member {Number} id
 */
ProductFieldAllOf.prototype['id'] = undefined;
/**
 * The key of the Product Field
 * @member {String} key
 */
ProductFieldAllOf.prototype['key'] = undefined;
/**
 * Position (index) of the Product Field in the detail view
 * @member {Number} order_nr
 */
ProductFieldAllOf.prototype['order_nr'] = undefined;
/**
 * The Product Field creation time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
ProductFieldAllOf.prototype['add_time'] = undefined;
/**
 * The Product Field last update time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
ProductFieldAllOf.prototype['update_time'] = undefined;
/**
 * The ID of the last user to update the Product Field
 * @member {Number} last_updated_by_user_id
 */
ProductFieldAllOf.prototype['last_updated_by_user_id'] = undefined;
/**
 * Whether or not the Product Field is currently active
 * @member {Boolean} active_flag
 */
ProductFieldAllOf.prototype['active_flag'] = undefined;
/**
 * Whether or not the Product Field Name and metadata is editable
 * @member {Boolean} edit_flag
 */
ProductFieldAllOf.prototype['edit_flag'] = undefined;
/**
 * Whether or not the Product Field is visible in the Add Product Modal
 * @member {Boolean} add_visible_flag
 */
ProductFieldAllOf.prototype['add_visible_flag'] = undefined;
/**
 * Whether or not the Product Field is marked as important
 * @member {Boolean} important_flag
 */
ProductFieldAllOf.prototype['important_flag'] = undefined;
/**
 * Whether or not the Product Field data can be edited
 * @member {Boolean} bulk_edit_allowed
 */
ProductFieldAllOf.prototype['bulk_edit_allowed'] = undefined;
/**
 * Whether or not the Product Field is searchable
 * @member {Boolean} searchable_flag
 */
ProductFieldAllOf.prototype['searchable_flag'] = undefined;
/**
 * Whether or not the Product Field value can be used when filtering searches
 * @member {Boolean} filtering_allowed
 */
ProductFieldAllOf.prototype['filtering_allowed'] = undefined;
/**
 * Whether or not the Product Field is sortable
 * @member {Boolean} sortable_flag
 */
ProductFieldAllOf.prototype['sortable_flag'] = undefined;
/**
 * Whether or not the Product Field is mandatory when creating products
 * @member {Boolean} mandatory_flag
 */
ProductFieldAllOf.prototype['mandatory_flag'] = undefined;



/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
ProductField['FieldTypeEnum'] = {

    /**
     * value: "varchar"
     * @const
     */
    "varchar": "varchar",

    /**
     * value: "varchar_auto"
     * @const
     */
    "varchar_auto": "varchar_auto",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "double"
     * @const
     */
    "double": "double",

    /**
     * value: "monetary"
     * @const
     */
    "monetary": "monetary",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "set"
     * @const
     */
    "set": "set",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "org"
     * @const
     */
    "org": "org",

    /**
     * value: "people"
     * @const
     */
    "people": "people",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "time"
     * @const
     */
    "time": "time",

    /**
     * value: "timerange"
     * @const
     */
    "timerange": "timerange",

    /**
     * value: "daterange"
     * @const
     */
    "daterange": "daterange",

    /**
     * value: "address"
     * @const
     */
    "address": "address"
};



export default ProductField;

