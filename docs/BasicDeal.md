# Pipedrive.BasicDeal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Value of the deal. If omitted, value will be set to 0. | [optional] 
**currency** | **String** | Currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user. | [optional] 
**userId** | **Number** | The ID of the User which will be the owner of the created Deal. If not provided, the user making the request will be used. | [optional] 
**personId** | **Number** | The ID of a Person which this Deal will be linked to. If the Person does not exist yet, it needs to be created first. This property is required unless &#x60;org_id&#x60; is specified. | [optional] 
**orgId** | **Number** | The ID of an Organization which this Deal will be linked to. If the Organization does not exist yet, it needs to be created first. This property is required unless &#x60;person_id&#x60; is specified. | [optional] 
**stageId** | **Number** | The ID of a stage this Deal will be placed in a pipeline (note that you can&#39;t supply the ID of the pipeline as this will be assigned automatically based on &#x60;stage_id&#x60;). If omitted, the deal will be placed in the first stage of the default pipeline. | [optional] 
**status** | **String** | open &#x3D; Open, won &#x3D; Won, lost &#x3D; Lost, deleted &#x3D; Deleted. If omitted, status will be set to open. | [optional] 
**expectedCloseDate** | **Date** | The expected close date of the Deal. In ISO 8601 format: YYYY-MM-DD. | [optional] 
**probability** | **Number** | Deal success probability percentage. Used/shown only when &#x60;deal_probability&#x60; for the pipeline of the deal is enabled. | [optional] 
**lostReason** | **String** | Optional message about why the deal was lost (to be used when status&#x3D;lost) | [optional] 
**visibleTo** | [**VisibleTo**](VisibleTo.md) | Visibility of the deal. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.&lt;table&gt;&lt;tr&gt;&lt;th&gt;Value&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp;amp; followers (private)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company (shared)&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; | [optional] 



## Enum: StatusEnum


* `open` (value: `"open"`)

* `won` (value: `"won"`)

* `lost` (value: `"lost"`)

* `lost` (value: `"lost"`)

* `deleted` (value: `"deleted"`)




