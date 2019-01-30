mos = {
    "objectName": "APPLYNONWORKTIME",
    "className": "psdi.app.calendar.virtual.ApplyNonWorkTimeSet",
    "description": "Non-Persistent table to apply Non Work Time",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "NONWORKTIME",
            "required": false,
            "persistent": false,
            "title": "Non-Working Type",
            "remarks": "This time is not a countable work time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Calendar's Start Day",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Calendar's End Day",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CALENDAR"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "APPLYNONWORKTIME",
            "source": "CALENDAR",
            "remarks": "Relationship to the nonpersistent parameter set to apply  non work time.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}