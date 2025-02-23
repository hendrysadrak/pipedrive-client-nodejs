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
import RoleAssignment from './RoleAssignment';
import RolesAdditionalData from './RolesAdditionalData';

/**
 * The GetRoleAssignmentsAllOf model module.
 * @module model/GetRoleAssignmentsAllOf
 * @version 1.0.0
 */
class GetRoleAssignmentsAllOf {
    /**
     * Constructs a new <code>GetRoleAssignmentsAllOf</code>.
     * @alias module:model/GetRoleAssignmentsAllOf
     */
    constructor() { 
        
        GetRoleAssignmentsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRoleAssignmentsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRoleAssignmentsAllOf} obj Optional instance to populate.
     * @return {module:model/GetRoleAssignmentsAllOf} The populated <code>GetRoleAssignmentsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRoleAssignmentsAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [RoleAssignment]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = RolesAdditionalData.constructFromObject(data['additional_data']);

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
 * The Role assignments
 * @member {Array.<module:model/RoleAssignment>} data
 */
GetRoleAssignmentsAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/RolesAdditionalData} additional_data
 */
GetRoleAssignmentsAllOf.prototype['additional_data'] = undefined;






export default GetRoleAssignmentsAllOf;

