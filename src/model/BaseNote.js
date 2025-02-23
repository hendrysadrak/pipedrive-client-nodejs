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
import BaseNoteDealTitle from './BaseNoteDealTitle';
import BaseNoteOrganization from './BaseNoteOrganization';
import BaseNotePerson from './BaseNotePerson';
import NoteCreatorUser from './NoteCreatorUser';

/**
 * The BaseNote model module.
 * @module model/BaseNote
 * @version 1.0.0
 */
class BaseNote {
    /**
     * Constructs a new <code>BaseNote</code>.
     * @alias module:model/BaseNote
     */
    constructor() { 
        
        BaseNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseNote} obj Optional instance to populate.
     * @return {module:model/BaseNote} The populated <code>BaseNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseNote();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');

                delete data['content'];
            }
            if (data.hasOwnProperty('deal')) {
                obj['deal'] = BaseNoteDealTitle.constructFromObject(data['deal']);

                delete data['deal'];
            }
            if (data.hasOwnProperty('lead_id')) {
                obj['lead_id'] = ApiClient.convertToType(data['lead_id'], 'String');

                delete data['lead_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('last_update_user_id')) {
                obj['last_update_user_id'] = ApiClient.convertToType(data['last_update_user_id'], 'Number');

                delete data['last_update_user_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = BaseNoteOrganization.constructFromObject(data['organization']);

                delete data['organization'];
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = BaseNotePerson.constructFromObject(data['person']);

                delete data['person'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('pinned_to_deal_flag')) {
                obj['pinned_to_deal_flag'] = ApiClient.convertToType(data['pinned_to_deal_flag'], 'Boolean');

                delete data['pinned_to_deal_flag'];
            }
            if (data.hasOwnProperty('pinned_to_organization_flag')) {
                obj['pinned_to_organization_flag'] = ApiClient.convertToType(data['pinned_to_organization_flag'], 'Boolean');

                delete data['pinned_to_organization_flag'];
            }
            if (data.hasOwnProperty('pinned_to_person_flag')) {
                obj['pinned_to_person_flag'] = ApiClient.convertToType(data['pinned_to_person_flag'], 'Boolean');

                delete data['pinned_to_person_flag'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = NoteCreatorUser.constructFromObject(data['user']);

                delete data['user'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Note
 * @member {Number} id
 */
BaseNote.prototype['id'] = undefined;

/**
 * If Note is active or deleted
 * @member {Boolean} active_flag
 */
BaseNote.prototype['active_flag'] = undefined;

/**
 * The creation date and time of the Note
 * @member {String} add_time
 */
BaseNote.prototype['add_time'] = undefined;

/**
 * Content of the Note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
BaseNote.prototype['content'] = undefined;

/**
 * @member {module:model/BaseNoteDealTitle} deal
 */
BaseNote.prototype['deal'] = undefined;

/**
 * The ID of the Lead the Note is attached to
 * @member {String} lead_id
 */
BaseNote.prototype['lead_id'] = undefined;

/**
 * The ID of the Deal the Note is attached to
 * @member {Number} deal_id
 */
BaseNote.prototype['deal_id'] = undefined;

/**
 * The ID of the User who updated the Note last
 * @member {Number} last_update_user_id
 */
BaseNote.prototype['last_update_user_id'] = undefined;

/**
 * The ID of the Organization this Note is attached to
 * @member {Number} org_id
 */
BaseNote.prototype['org_id'] = undefined;

/**
 * @member {module:model/BaseNoteOrganization} organization
 */
BaseNote.prototype['organization'] = undefined;

/**
 * @member {module:model/BaseNotePerson} person
 */
BaseNote.prototype['person'] = undefined;

/**
 * The ID of the Person this Note is attached to
 * @member {Number} person_id
 */
BaseNote.prototype['person_id'] = undefined;

/**
 * If true, then the results are filtered by Note to Deal pinning state.
 * @member {Boolean} pinned_to_deal_flag
 */
BaseNote.prototype['pinned_to_deal_flag'] = undefined;

/**
 * If true, then the results are filtered by Note to Organization pinning state.
 * @member {Boolean} pinned_to_organization_flag
 */
BaseNote.prototype['pinned_to_organization_flag'] = undefined;

/**
 * If true, then the results are filtered by Note to Person pinning state.
 * @member {Boolean} pinned_to_person_flag
 */
BaseNote.prototype['pinned_to_person_flag'] = undefined;

/**
 * The last updated date and time of the Note
 * @member {String} update_time
 */
BaseNote.prototype['update_time'] = undefined;

/**
 * @member {module:model/NoteCreatorUser} user
 */
BaseNote.prototype['user'] = undefined;

/**
 * The ID of the Note creator
 * @member {Number} user_id
 */
BaseNote.prototype['user_id'] = undefined;






export default BaseNote;

