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


import ApiClient from "../ApiClient";
import PermissionSets from '../model/PermissionSets';
import SinglePermissionSetsItem from '../model/SinglePermissionSetsItem';
import UserAssignmentsToPermissionSet from '../model/UserAssignmentsToPermissionSet';

/**
* PermissionSets service.
* @module api/PermissionSetsApi
* @version 1.0.0
*/
export default class PermissionSetsApi {

    /**
    * Constructs a new PermissionSetsApi. 
    * @alias module:api/PermissionSetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get one Permission Set
     * @param {Number} id ID of the permission set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SinglePermissionSetsItem} and HTTP response
     */
    getPermissionSetWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPermissionSet");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = SinglePermissionSetsItem;
      return this.apiClient.callApi(
        '/permissionSets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one Permission Set
     * @param {Number} id ID of the permission set
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SinglePermissionSetsItem}
     */
    getPermissionSet(id) {
      return this.getPermissionSetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List Permission Set assignments
     * The list of assignments for a Permission Set
     * @param {Number} id ID of the permission set
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserAssignmentsToPermissionSet} and HTTP response
     */
    getPermissionSetAssignmentsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPermissionSetAssignments");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = UserAssignmentsToPermissionSet;
      return this.apiClient.callApi(
        '/permissionSets/{id}/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Permission Set assignments
     * The list of assignments for a Permission Set
     * @param {Number} id ID of the permission set
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserAssignmentsToPermissionSet}
     */
    getPermissionSetAssignments(id, opts) {
      return this.getPermissionSetAssignmentsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all Permission Sets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionSets} and HTTP response
     */
    getPermissionSetsWithHttpInfo() {
      const opts = {}
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = PermissionSets;
      return this.apiClient.callApi(
        '/permissionSets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all Permission Sets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionSets}
     */
    getPermissionSets() {
      return this.getPermissionSetsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
