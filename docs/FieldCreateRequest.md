# Pipedrive.FieldCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the field | 
**options** | **String** | When &#x60;field_type&#x60; is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: &#x60;[{\&quot;label\&quot;:\&quot;New Item\&quot;}]&#x60; | [optional] 
**addVisibleFlag** | **Boolean** | Whether the field is available in &#39;add new&#39; modal or not (both in web and mobile app) | [optional] [default to true]
**fieldType** | [**FieldTypeAsString**](FieldTypeAsString.md) |  | 



## Enum: AddVisibleFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)




