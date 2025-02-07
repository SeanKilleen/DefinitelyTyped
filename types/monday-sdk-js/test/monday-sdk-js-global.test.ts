const monday = mondaySdk();

monday.api('test'); // $ExpectType Promise<{ data: object; }>
monday.setToken('test'); // $ExpectType void
monday.get('context'); // $ExpectType Promise<any>
monday.get('settings'); // $ExpectType Promise<any>
monday.get('itemIds'); // $ExpectType Promise<any>
monday.get('sessionToken'); // $ExpectType Promise<any>
monday.listen('context', res => res); // $ExpectType void
monday.execute('openItemCard', { itemId: 123 }); // $ExpectType Promise<any>
monday.execute('confirm', { message: 'Hello' }); // $ExpectType Promise<{ data: { confirm: boolean; }; }>
monday.execute('notice', { message: 'Hello' }); // $ExpectType Promise<any>
monday.oauth({clientId: 'clientId'});
monday.storage.instance.getItem('test'); // $ExpectType Promise<{ data: GetResponse; }>
monday.storage.instance.setItem('test', '123'); // $ExpectType Promise<SetResponse>

const mondayServer = mondaySdk({ token: '123' });

mondayServer.setToken('123'); // $ExpectType void
mondayServer.api('test'); // $ExpectType Promise<any>
mondayServer.api('test', { token: 'test' }); // $ExpectType Promise<any>
mondayServer.api('test', { variables: { variable1: 'test' } }); // $ExpectType Promise<any>
mondayServer.api('test', { token: 'test', variables: { variable1: 'test' } }); // $ExpectType Promise<any>
mondayServer.oauthToken('test', 'test', 'test'); // $ExpectType Promise<any>
