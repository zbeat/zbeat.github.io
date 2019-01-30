mos = {
    "objectName": "APPFIELDDEFAULTS",
    "className": "psdi.app.appsetup.AppFieldDefaultsSet",
    "description": "Default values for fields by group or user",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "APPFIELDDEFAULTSID",
    "primaryKeyColumns": [
        "APP",
        "OBJECTNAME",
        "ATTRIBUTENAME",
        "SITEID",
        "GRPNAME",
        "USERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Field defaults for an application",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "The field default for an attribute.",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GRPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group the field default applies to.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "PERSONID",
            "targetKeys": "GRPNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "PERSONID",
            "targetKeys": "USERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person the field default applies to.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "GRPNAME",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "Group Name",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "USERNAME",
            "required": false,
            "persistent": true,
            "title": "User",
            "remarks": "User Name",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default",
            "remarks": "Default Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "APPFIELDDEFAULTSID",
            "required": true,
            "persistent": true,
            "title": "APPFIELDDEFAULTSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "APPFIELDDEFAULTS",
            "source": "MAXAPPS",
            "remarks": "Relationship to AppFieldDefaults table, used to find all AppFieldDefaults for an App. ( appfielddefaults.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        }
    ]
}