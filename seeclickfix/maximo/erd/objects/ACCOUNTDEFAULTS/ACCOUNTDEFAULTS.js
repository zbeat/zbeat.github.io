mos = {
    "objectName": "ACCOUNTDEFAULTS",
    "className": "psdi.app.financial.AccountDefaultsSet",
    "description": "The Accounts Defaults table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ACCOUNTDEFAULTSID",
    "primaryKeyColumns": [
        "ORGID",
        "DFLTGROUP",
        "GROUPVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ACCOUNTDEFAULTS",
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
            "attributeName": "DFLTGROUP",
            "required": true,
            "persistent": true,
            "title": "Group Type",
            "remarks": "Group type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPVALUE",
            "required": true,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Click the Select Value button to retrieve a valid value from the relevant table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEFAULT",
            "required": false,
            "persistent": true,
            "title": "Control Account",
            "remarks": "Current default GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDGLDEFAULT",
            "required": false,
            "persistent": true,
            "title": "Old GL Default ",
            "remarks": "Previous GL default",
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
            "attributeName": "ACCOUNTDEFAULTSID",
            "required": true,
            "persistent": true,
            "title": "ACCOUNTDEFAULTSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACCDEFCOMMODITY",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find the commodity for a given accountdefault type. (commodities.commodity = accountdefaults.groupvalue and parent is null). The resulting set will contain zero or one object.",
            "whereClause": "commodity = :groupvalue and parent is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the company used as the group for establishing a default account. (accountdefaults.groupvalue = companies.company). The resulting set will contain zero or one object.",
            "whereClause": "company = :groupvalue and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACCDEFEXTLABREC",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'EXLABREC' and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFINVRESCODE",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'INVRESCODE' and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFLABRESEXT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'LABRESCODE' and groupvalue = '1' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFLABRESINT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'LABRESCODE' and groupvalue = '0' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFROTSUSPACCT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'INVRELACC' and groupvalue = 'ROTSUSPACCT' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFTICKETRELACCT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'TICKETRELACCT' and groupvalue = 'GLOBALTICKETACCT' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFTOOLRECACCT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'TOOLREC' and groupvalue = 'TOOLRECACCT' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFTOOLRESEXT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'TOOLRESCODE' and groupvalue = '1' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCDEFTOOLRESINT",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "dfltgroup = 'TOOLRESCODE' and groupvalue = '0' and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACCOUNTDEFAULTS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the AccountDefaults table, used to find all account defaults records for a given organization. (organization.orgid = accountdefaults.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}