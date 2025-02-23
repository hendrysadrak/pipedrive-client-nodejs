# Pipedrive.AddNoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leadId** | **String** | The ID of the Lead the note will be attached to. This property is required unless one of (&#x60;deal_id/person_id/org_id&#x60;) is specified. | [optional] 
**dealId** | **Number** | The ID of the Deal the note will be attached to. This property is required unless one of (&#x60;lead_id/person_id/org_id&#x60;) is specified. | [optional] 
**personId** | **Number** | The ID of the Person this note will be attached to. This property is required unless one of (&#x60;deal_id/lead_id/org_id&#x60;) is specified. | [optional] 
**orgId** | **Number** | The ID of the Organization this note will be attached to. This property is required unless one of (&#x60;deal_id/lead_id/person_id&#x60;) is specified. | [optional] 
**content** | **String** | Content of the note in HTML format. Subject to sanitization on the back-end. | [optional] 
**userId** | **Number** | ID of the user who will be marked as the author of this note. Only an admin can change the author. | [optional] 
**addTime** | **String** | Optional creation date &amp; time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS | [optional] 
**pinnedToLeadFlag** | [**NumberBoolean**](NumberBoolean.md) | If set, then results are filtered by note to lead pinning state (&#x60;lead_id&#x60; is also required) | [optional] 
**pinnedToDealFlag** | [**NumberBoolean**](NumberBoolean.md) | If set, then results are filtered by note to deal pinning state (&#x60;deal_id&#x60; is also required). | [optional] 
**pinnedToOrganizationFlag** | [**NumberBoolean**](NumberBoolean.md) | If set, then results are filtered by note to organization pinning state (&#x60;org_id&#x60; is also required). | [optional] 
**pinnedToPersonFlag** | [**NumberBoolean**](NumberBoolean.md) | If set, then results are filtered by note to person pinning state (&#x60;person_id&#x60; is also required). | [optional] 


