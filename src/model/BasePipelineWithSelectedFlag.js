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
import BasePipeline from './BasePipeline';
import BasePipelineWithSelectedFlagAllOf from './BasePipelineWithSelectedFlagAllOf';

/**
 * The BasePipelineWithSelectedFlag model module.
 * @module model/BasePipelineWithSelectedFlag
 * @version 1.0.0
 */
class BasePipelineWithSelectedFlag {
    /**
     * Constructs a new <code>BasePipelineWithSelectedFlag</code>.
     * @alias module:model/BasePipelineWithSelectedFlag
     * @implements module:model/BasePipeline
     * @implements module:model/BasePipelineWithSelectedFlagAllOf
     */
    constructor() { 
        BasePipeline.initialize(this);BasePipelineWithSelectedFlagAllOf.initialize(this);
        BasePipelineWithSelectedFlag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasePipelineWithSelectedFlag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasePipelineWithSelectedFlag} obj Optional instance to populate.
     * @return {module:model/BasePipelineWithSelectedFlag} The populated <code>BasePipelineWithSelectedFlag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasePipelineWithSelectedFlag();
            BasePipeline.constructFromObject(data, obj);
            BasePipelineWithSelectedFlagAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('url_title')) {
                obj['url_title'] = ApiClient.convertToType(data['url_title'], 'String');

                delete data['url_title'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');

                delete data['active'];
            }
            if (data.hasOwnProperty('deal_probability')) {
                obj['deal_probability'] = ApiClient.convertToType(data['deal_probability'], 'Boolean');

                delete data['deal_probability'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');

                delete data['selected'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Pipeline
 * @member {Number} id
 */
BasePipelineWithSelectedFlag.prototype['id'] = undefined;

/**
 * The name of the Pipeline
 * @member {String} name
 */
BasePipelineWithSelectedFlag.prototype['name'] = undefined;

/**
 * The Pipeline title displayed in the URL
 * @member {String} url_title
 */
BasePipelineWithSelectedFlag.prototype['url_title'] = undefined;

/**
 * Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
 * @member {Number} order_nr
 */
BasePipelineWithSelectedFlag.prototype['order_nr'] = undefined;

/**
 * Whether this Pipeline will be made inactive (hidden) or active
 * @member {Boolean} active
 */
BasePipelineWithSelectedFlag.prototype['active'] = undefined;

/**
 * Whether Deal probability is disabled or enabled for this Pipeline
 * @member {Boolean} deal_probability
 */
BasePipelineWithSelectedFlag.prototype['deal_probability'] = undefined;

/**
 * The Pipeline creation time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
BasePipelineWithSelectedFlag.prototype['add_time'] = undefined;

/**
 * The Pipeline update time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
BasePipelineWithSelectedFlag.prototype['update_time'] = undefined;

/**
 * A boolean that shows if the Pipeline is selected from a filter or not
 * @member {Boolean} selected
 */
BasePipelineWithSelectedFlag.prototype['selected'] = undefined;


// Implement BasePipeline interface:
/**
 * The ID of the Pipeline
 * @member {Number} id
 */
BasePipeline.prototype['id'] = undefined;
/**
 * The name of the Pipeline
 * @member {String} name
 */
BasePipeline.prototype['name'] = undefined;
/**
 * The Pipeline title displayed in the URL
 * @member {String} url_title
 */
BasePipeline.prototype['url_title'] = undefined;
/**
 * Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
 * @member {Number} order_nr
 */
BasePipeline.prototype['order_nr'] = undefined;
/**
 * Whether this Pipeline will be made inactive (hidden) or active
 * @member {Boolean} active
 */
BasePipeline.prototype['active'] = undefined;
/**
 * Whether Deal probability is disabled or enabled for this Pipeline
 * @member {Boolean} deal_probability
 */
BasePipeline.prototype['deal_probability'] = undefined;
/**
 * The Pipeline creation time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
BasePipeline.prototype['add_time'] = undefined;
/**
 * The Pipeline update time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
BasePipeline.prototype['update_time'] = undefined;
// Implement BasePipelineWithSelectedFlagAllOf interface:
/**
 * A boolean that shows if the Pipeline is selected from a filter or not
 * @member {Boolean} selected
 */
BasePipelineWithSelectedFlagAllOf.prototype['selected'] = undefined;




export default BasePipelineWithSelectedFlag;

