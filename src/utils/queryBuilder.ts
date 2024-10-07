import dataDictionary from "./dataDictionary";

function generateWhereParams(sqlQuery: string, params: { [key: string]: any }): string {
    const mapedParams = dataDictionary.reverseMap(params);

    let paramst = "";

    for (const [chave, valor] of Object.entries(mapedParams)) {
        paramst += `AND ${chave} = '${valor}'`;
    }

    return sqlQuery.replace("/*WHERE_PARAMS*/", paramst);
}

export default { generateWhereParams }