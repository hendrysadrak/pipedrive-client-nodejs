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
import MergePersonDealRelatedInfo from './MergePersonDealRelatedInfo';
import PersonNameCountAndEmailInfoWithIds from './PersonNameCountAndEmailInfoWithIds';

/**
 * The AdditionalMergePersonInfo model module.
 * @module model/AdditionalMergePersonInfo
 * @version 1.0.0
 */
class AdditionalMergePersonInfo {
    /**
     * Constructs a new <code>AdditionalMergePersonInfo</code>.
     * @alias module:model/AdditionalMergePersonInfo
     * @implements module:model/PersonNameCountAndEmailInfoWithIds
     * @implements module:model/MergePersonDealRelatedInfo
     */
    constructor() { 
        PersonNameCountAndEmailInfoWithIds.initialize(this);MergePersonDealRelatedInfo.initialize(this);
        AdditionalMergePersonInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalMergePersonInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalMergePersonInfo} obj Optional instance to populate.
     * @return {module:model/AdditionalMergePersonInfo} The populated <code>AdditionalMergePersonInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalMergePersonInfo();
            PersonNameCountAndEmailInfoWithIds.constructFromObject(data, obj);
            MergePersonDealRelatedInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('merge_what_id')) {
                obj['merge_what_id'] = ApiClient.convertToType(data['merge_what_id'], 'Number');

                delete data['merge_what_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');

                delete data['first_name'];
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');

                delete data['last_name'];
            }
            if (data.hasOwnProperty('email_messages_count')) {
                obj['email_messages_count'] = ApiClient.convertToType(data['email_messages_count'], 'Number');

                delete data['email_messages_count'];
            }
            if (data.hasOwnProperty('activities_count')) {
                obj['activities_count'] = ApiClient.convertToType(data['activities_count'], 'Number');

                delete data['activities_count'];
            }
            if (data.hasOwnProperty('done_activities_count')) {
                obj['done_activities_count'] = ApiClient.convertToType(data['done_activities_count'], 'Number');

                delete data['done_activities_count'];
            }
            if (data.hasOwnProperty('undone_activities_count')) {
                obj['undone_activities_count'] = ApiClient.convertToType(data['undone_activities_count'], 'Number');

                delete data['undone_activities_count'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('notes_count')) {
                obj['notes_count'] = ApiClient.convertToType(data['notes_count'], 'Number');

                delete data['notes_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('last_incoming_mail_time')) {
                obj['last_incoming_mail_time'] = ApiClient.convertToType(data['last_incoming_mail_time'], 'String');

                delete data['last_incoming_mail_time'];
            }
            if (data.hasOwnProperty('last_outgoing_mail_time')) {
                obj['last_outgoing_mail_time'] = ApiClient.convertToType(data['last_outgoing_mail_time'], 'String');

                delete data['last_outgoing_mail_time'];
            }
            if (data.hasOwnProperty('open_deals_count')) {
                obj['open_deals_count'] = ApiClient.convertToType(data['open_deals_count'], 'Number');

                delete data['open_deals_count'];
            }
            if (data.hasOwnProperty('related_open_deals_count')) {
                obj['related_open_deals_count'] = ApiClient.convertToType(data['related_open_deals_count'], 'Number');

                delete data['related_open_deals_count'];
            }
            if (data.hasOwnProperty('closed_deals_count')) {
                obj['closed_deals_count'] = ApiClient.convertToType(data['closed_deals_count'], 'Number');

                delete data['closed_deals_count'];
            }
            if (data.hasOwnProperty('related_closed_deals_count')) {
                obj['related_closed_deals_count'] = ApiClient.convertToType(data['related_closed_deals_count'], 'Number');

                delete data['related_closed_deals_count'];
            }
            if (data.hasOwnProperty('won_deals_count')) {
                obj['won_deals_count'] = ApiClient.convertToType(data['won_deals_count'], 'Number');

                delete data['won_deals_count'];
            }
            if (data.hasOwnProperty('related_won_deals_count')) {
                obj['related_won_deals_count'] = ApiClient.convertToType(data['related_won_deals_count'], 'Number');

                delete data['related_won_deals_count'];
            }
            if (data.hasOwnProperty('lost_deals_count')) {
                obj['lost_deals_count'] = ApiClient.convertToType(data['lost_deals_count'], 'Number');

                delete data['lost_deals_count'];
            }
            if (data.hasOwnProperty('related_lost_deals_count')) {
                obj['related_lost_deals_count'] = ApiClient.convertToType(data['related_lost_deals_count'], 'Number');

                delete data['related_lost_deals_count'];
            }
            if (data.hasOwnProperty('next_activity_date')) {
                obj['next_activity_date'] = ApiClient.convertToType(data['next_activity_date'], 'String');

                delete data['next_activity_date'];
            }
            if (data.hasOwnProperty('next_activity_time')) {
                obj['next_activity_time'] = ApiClient.convertToType(data['next_activity_time'], 'String');

                delete data['next_activity_time'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_id')) {
                obj['last_activity_id'] = ApiClient.convertToType(data['last_activity_id'], 'Number');

                delete data['last_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_date')) {
                obj['last_activity_date'] = ApiClient.convertToType(data['last_activity_date'], 'String');

                delete data['last_activity_date'];
            }
            if (data.hasOwnProperty('participant_open_deals_count')) {
                obj['participant_open_deals_count'] = ApiClient.convertToType(data['participant_open_deals_count'], 'Number');

                delete data['participant_open_deals_count'];
            }
            if (data.hasOwnProperty('participant_closed_deals_count')) {
                obj['participant_closed_deals_count'] = ApiClient.convertToType(data['participant_closed_deals_count'], 'Number');

                delete data['participant_closed_deals_count'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the owner related to the Person
 * @member {Number} owner_id
 */
AdditionalMergePersonInfo.prototype['owner_id'] = undefined;

/**
 * The ID of the Organization related to the Person
 * @member {Number} org_id
 */
AdditionalMergePersonInfo.prototype['org_id'] = undefined;

/**
 * The ID of the Person with what the main Person was merged
 * @member {Number} merge_what_id
 */
AdditionalMergePersonInfo.prototype['merge_what_id'] = undefined;

/**
 * The name of the Person
 * @member {String} name
 */
AdditionalMergePersonInfo.prototype['name'] = undefined;

/**
 * The first name of the Person
 * @member {String} first_name
 */
AdditionalMergePersonInfo.prototype['first_name'] = undefined;

/**
 * The last name of the Person
 * @member {String} last_name
 */
AdditionalMergePersonInfo.prototype['last_name'] = undefined;

/**
 * The count of email messages related to the Person
 * @member {Number} email_messages_count
 */
AdditionalMergePersonInfo.prototype['email_messages_count'] = undefined;

/**
 * The count of activities related to the Person
 * @member {Number} activities_count
 */
AdditionalMergePersonInfo.prototype['activities_count'] = undefined;

/**
 * The count of done activities related to the Person
 * @member {Number} done_activities_count
 */
AdditionalMergePersonInfo.prototype['done_activities_count'] = undefined;

/**
 * The count of undone activities related to the Person
 * @member {Number} undone_activities_count
 */
AdditionalMergePersonInfo.prototype['undone_activities_count'] = undefined;

/**
 * The count of files related to the Person
 * @member {Number} files_count
 */
AdditionalMergePersonInfo.prototype['files_count'] = undefined;

/**
 * The count of notes related to the Person
 * @member {Number} notes_count
 */
AdditionalMergePersonInfo.prototype['notes_count'] = undefined;

/**
 * The count of followers related to the Person
 * @member {Number} followers_count
 */
AdditionalMergePersonInfo.prototype['followers_count'] = undefined;

/**
 * The date and time of the last incoming email associated with the Person
 * @member {String} last_incoming_mail_time
 */
AdditionalMergePersonInfo.prototype['last_incoming_mail_time'] = undefined;

/**
 * The date and time of the last outgoing email associated with the Person
 * @member {String} last_outgoing_mail_time
 */
AdditionalMergePersonInfo.prototype['last_outgoing_mail_time'] = undefined;

/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
AdditionalMergePersonInfo.prototype['open_deals_count'] = undefined;

/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
AdditionalMergePersonInfo.prototype['related_open_deals_count'] = undefined;

/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
AdditionalMergePersonInfo.prototype['closed_deals_count'] = undefined;

/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
AdditionalMergePersonInfo.prototype['related_closed_deals_count'] = undefined;

/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
AdditionalMergePersonInfo.prototype['won_deals_count'] = undefined;

/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
AdditionalMergePersonInfo.prototype['related_won_deals_count'] = undefined;

/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
AdditionalMergePersonInfo.prototype['lost_deals_count'] = undefined;

/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
AdditionalMergePersonInfo.prototype['related_lost_deals_count'] = undefined;

/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
AdditionalMergePersonInfo.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
AdditionalMergePersonInfo.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
AdditionalMergePersonInfo.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
AdditionalMergePersonInfo.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
AdditionalMergePersonInfo.prototype['last_activity_date'] = undefined;

/**
 * The count of open participant Deals related with the item
 * @member {Number} participant_open_deals_count
 */
AdditionalMergePersonInfo.prototype['participant_open_deals_count'] = undefined;

/**
 * The count of closed participant Deals related with the item
 * @member {Number} participant_closed_deals_count
 */
AdditionalMergePersonInfo.prototype['participant_closed_deals_count'] = undefined;


// Implement PersonNameCountAndEmailInfoWithIds interface:
/**
 * The ID of the owner related to the Person
 * @member {Number} owner_id
 */
PersonNameCountAndEmailInfoWithIds.prototype['owner_id'] = undefined;
/**
 * The ID of the Organization related to the Person
 * @member {Number} org_id
 */
PersonNameCountAndEmailInfoWithIds.prototype['org_id'] = undefined;
/**
 * The ID of the Person with what the main Person was merged
 * @member {Number} merge_what_id
 */
PersonNameCountAndEmailInfoWithIds.prototype['merge_what_id'] = undefined;
/**
 * The name of the Person
 * @member {String} name
 */
PersonNameCountAndEmailInfoWithIds.prototype['name'] = undefined;
/**
 * The first name of the Person
 * @member {String} first_name
 */
PersonNameCountAndEmailInfoWithIds.prototype['first_name'] = undefined;
/**
 * The last name of the Person
 * @member {String} last_name
 */
PersonNameCountAndEmailInfoWithIds.prototype['last_name'] = undefined;
/**
 * The count of email messages related to the Person
 * @member {Number} email_messages_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['email_messages_count'] = undefined;
/**
 * The count of activities related to the Person
 * @member {Number} activities_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['activities_count'] = undefined;
/**
 * The count of done activities related to the Person
 * @member {Number} done_activities_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['done_activities_count'] = undefined;
/**
 * The count of undone activities related to the Person
 * @member {Number} undone_activities_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['undone_activities_count'] = undefined;
/**
 * The count of files related to the Person
 * @member {Number} files_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['files_count'] = undefined;
/**
 * The count of notes related to the Person
 * @member {Number} notes_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['notes_count'] = undefined;
/**
 * The count of followers related to the Person
 * @member {Number} followers_count
 */
PersonNameCountAndEmailInfoWithIds.prototype['followers_count'] = undefined;
/**
 * The date and time of the last incoming email associated with the Person
 * @member {String} last_incoming_mail_time
 */
PersonNameCountAndEmailInfoWithIds.prototype['last_incoming_mail_time'] = undefined;
/**
 * The date and time of the last outgoing email associated with the Person
 * @member {String} last_outgoing_mail_time
 */
PersonNameCountAndEmailInfoWithIds.prototype['last_outgoing_mail_time'] = undefined;
// Implement MergePersonDealRelatedInfo interface:
/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
MergePersonDealRelatedInfo.prototype['open_deals_count'] = undefined;
/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_open_deals_count'] = undefined;
/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['closed_deals_count'] = undefined;
/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_closed_deals_count'] = undefined;
/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
MergePersonDealRelatedInfo.prototype['won_deals_count'] = undefined;
/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_won_deals_count'] = undefined;
/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
MergePersonDealRelatedInfo.prototype['lost_deals_count'] = undefined;
/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
MergePersonDealRelatedInfo.prototype['related_lost_deals_count'] = undefined;
/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
MergePersonDealRelatedInfo.prototype['next_activity_date'] = undefined;
/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
MergePersonDealRelatedInfo.prototype['next_activity_time'] = undefined;
/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
MergePersonDealRelatedInfo.prototype['next_activity_id'] = undefined;
/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
MergePersonDealRelatedInfo.prototype['last_activity_id'] = undefined;
/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
MergePersonDealRelatedInfo.prototype['last_activity_date'] = undefined;
/**
 * The count of open participant Deals related with the item
 * @member {Number} participant_open_deals_count
 */
MergePersonDealRelatedInfo.prototype['participant_open_deals_count'] = undefined;
/**
 * The count of closed participant Deals related with the item
 * @member {Number} participant_closed_deals_count
 */
MergePersonDealRelatedInfo.prototype['participant_closed_deals_count'] = undefined;




export default AdditionalMergePersonInfo;

