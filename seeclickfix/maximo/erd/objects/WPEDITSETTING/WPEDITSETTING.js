mos = {
    "objectName": "WPEDITSETTING",
    "className": "psdi.app.workorder.WpEditSettingSet",
    "description": "Work Order editability setting for a given status",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WPEDITSETTINGID",
    "primaryKeyColumns": [
        "ORGID",
        "STATUS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WPEDITSETTING",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status at which fields are editable. For each field in the row, select the check box to make the field editable when the work order is at the indicated status level. Clear the check box for each field to disable editing at that status level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITGLACCOUNT",
            "required": true,
            "persistent": true,
            "title": "GL Account",
            "remarks": "Specifies whether the general ledger account can be edited when the work order is in the selected status. If the check box is selected, you can edit the work order's general ledger account. If the check box is cleared, you cannot edit the work order's general ledger account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITASSET",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Specifies whether the asset can be edited when the work order is in the selected status. If the check box is selected, you can edit the work order's asset. If the check box is cleared, you cannot edit the work order's asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITLOC",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Specifies whether the location can be edited when the work order is in the selected status. If the check box is selected, you can edit the work order's location. If the check box is cleared, you cannot edit the work order's location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITWPLAB",
            "required": true,
            "persistent": true,
            "title": "WP Labor",
            "remarks": "Specifies whether the work plan labor can be edited when the work order is in the selected status. If the check box is selected, you can edit the work plan labor. If the check box is cleared, you cannot edit the work plan labor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITWPMAT",
            "required": true,
            "persistent": true,
            "title": "WP Materials",
            "remarks": "Specifies whether the work plan materials can be edited when the work order is in the selected status. If the check box is selected, you can edit the work plan materials. If the check box is cleared, you cannot edit the work plan materials.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITWPTOOL",
            "required": true,
            "persistent": true,
            "title": "WP Tools",
            "remarks": "Specifies whether the work plan tools can be edited when the work order is in the selected status. If the check box is selected, you can edit the work plan tools. If the check box is cleared, you cannot edit the work plan tools.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITSAFETY",
            "required": true,
            "persistent": true,
            "title": "Safety Tab",
            "remarks": "Specifies whether safety information can be edited when the work order is in the selected status. If the check box is selected, you can edit the safety information. If the check box is cleared, you cannot edit the safety information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WPEDITSETTINGID",
            "required": true,
            "persistent": true,
            "title": "WPEDITSETTINGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITWPSER",
            "required": true,
            "persistent": true,
            "title": "WP Service",
            "remarks": "Specifies whether the work plan services can be edited when the work order is in the selected status. If the check box is selected, you can edit the work plan services. If the check box is cleared, you cannot edit the work plan services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEDITAFAL",
            "required": true,
            "persistent": true,
            "title": "As Found / As Left",
            "remarks": "When selected, you can edit the As Found and As Left values on a work order data sheet that is in the selected status. For example, you can opt to allow for the editing of As Found and As Left values only when the work order is in the In Progress or Waiting for Materials statuses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEDITDS",
            "required": true,
            "persistent": true,
            "title": "New Data Sheet",
            "remarks": "When selected, you can add a data sheet to a work order when the work order is in the selected status. For example, you can opt to add a data sheet to a work order when the work order is in the In Progress status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEDITPOINT",
            "required": true,
            "persistent": true,
            "title": "Edit Cal Point",
            "remarks": "When selected, you can add a calibration point to a work order data sheet that is in the selected status. For example, you can opt to add a calibration point to a work order data sheet only when the work order is in the In Progress or Waiting for Materials statuses.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WPEDITSETTING",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the WpEditSetting table, used to find all edit setting records for a given organization. (organization.orgid = wpeditsetting.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}