const nameMap: { [key: string]: string } = {
    id: "identificação",
    username: "usuário",
    email: "endereço_email"
};

function renameData(data: { [key: string]: any }[]): { [key: string]: any }[] {
    const invertedMap = Object.entries(nameMap).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {} as { [key: string]: string });

    return data.map(item => {
        return Object.keys(item).reduce((acc, key) => {
            const newKey = nameMap[key];
            if (newKey === undefined) {
                throw new Error(`Key '${key}' not found in nameMap for object: ${JSON.stringify(item)}`);
            }
            acc[newKey] = item[key];
            return acc;
        }, {} as { [key: string]: string });
    });
}


function reverseMap(data: { [key: string]: any }): { [key: string]: any } {
    const invertedMap = Object.entries(nameMap).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {} as { [key: string]: string });

    return Object.keys(data).reduce((acc, key) => {
        const newKey = invertedMap[key];
        if (newKey === undefined) {
            throw new Error(`Key '${key}' not found in nameMap for object: ${JSON.stringify(data)}`);
        }
        acc[newKey] = data[key];
        return acc;
    }, {} as { [key: string]: string });

}

export default { renameData, reverseMap }