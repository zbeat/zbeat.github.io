mos = {
    "objectName": "ARCHIVE",
    "className": "psdi.app.system.ArchiveSet",
    "description": "The ARCHIVE Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ARCHIVEID",
    "primaryKeyColumns": [
        "ARCHIVEDATE",
        "MODULE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ARCHIVE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ARCHIVE",
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
            "attributeName": "ARCHIVEDATE",
            "required": true,
            "persistent": true,
            "title": "Archived Date",
            "remarks": "Archive Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODULE",
            "required": true,
            "persistent": true,
            "title": "Module",
            "remarks": "Module Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Archive Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PATH",
            "required": false,
            "persistent": true,
            "title": "Path",
            "remarks": "Archive Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ARCHSCRIPT",
            "required": false,
            "persistent": true,
            "title": "Archive Script",
            "remarks": "Archive Script",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTSCRIPT",
            "required": false,
            "persistent": true,
            "title": "Restore Script",
            "remarks": "Restore Script",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWSQL",
            "required": false,
            "persistent": true,
            "title": "View Sql",
            "remarks": "Archive View SQL",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ARCHIVEID",
            "required": true,
            "persistent": true,
            "title": "ARCHIVEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}