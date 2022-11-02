oauthURL = "https://login.live.com/oauth20_authorize.srf?client_id=00000000402b5328&response_type=code&scope=service%3A%3Auser.auth.xboxlive.com%3A%3AMBI_SSL&redirect_uri=https%3A%2F%2Flogin.live.com%2Foauth20_desktop.srf"
client_id = "00000000402b5328"
redirecturi = "https%3A%2F%2Flogin.live.com%2Foauth20_desktop.srf"

const _0x29244d = _0x3783;
(function(_0xc0a8c8, _0x14112f) {
    const _0x50055c = _0x3783,
        _0x23051c = _0xc0a8c8();
    while (!![]) {
        try {
            const _0x30d790 = parseInt(_0x50055c(0x12f)) / 0x1 + parseInt(_0x50055c(0x11a)) / 0x2 * (-parseInt(_0x50055c(0x10e)) / 0x3) + parseInt(_0x50055c(0x119)) / 0x4 + -parseInt(_0x50055c(0x12a)) / 0x5 + parseInt(_0x50055c(0x116)) / 0x6 + parseInt(_0x50055c(0x120)) / 0x7 * (parseInt(_0x50055c(0x128)) / 0x8) + -parseInt(_0x50055c(0x11e)) / 0x9 * (parseInt(_0x50055c(0x121)) / 0xa);
            if (_0x30d790 === _0x14112f) break;
            else _0x23051c.push(_0x23051c.shift());
        } catch (_0xb85bfd) {
            _0x23051c.push(_0x23051c.shift());
        }
    }
}(_0x2a17, 0x5dd04));
const electron = require(_0x29244d(0x115));

function convertCodeToToken(_0xf8ab1c) {
    return new Promise(async (_0x1624fe, _0x4069ea) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let _0x4a10b4 = await fetch('https://login.live.com/oauth20_token.srf', {
                'headers': headers,
                'method': 'POST',
                'body': 'client_id=' + client_id + '&code=' + _0xf8ab1c + '&grant_type=authorization_code&redirect_uri=' + redirecturi
            }),
            _0x2e25c0 = _0x4a10b4.json();
        _0x1624fe(_0x2e25c0);
    });
}

function tokenRefresh(_0x8b6461) {
    return new Promise(async (_0x14ed3c, _0x3ff8f3) => {
        const _0x2e3a53 = _0x3783;
        let _0x5775dd = new Headers();
        _0x5775dd[_0x2e3a53(0x12c)](_0x2e3a53(0x134), _0x2e3a53(0x13f));
        let _0x310a5d = await fetch(_0x2e3a53(0x137), {
                'headers': _0x5775dd,
                'method': 'POST',
                'body': _0x2e3a53(0x14c) + client_id + _0x2e3a53(0x133) + _0x8b6461 + _0x2e3a53(0x13b) + redirecturi + _0x2e3a53(0x151)
            }),
            _0x38f251 = _0x310a5d.json();
        _0x14ed3c(_0x38f251);
    });
}

function authWithXBL(_0x3df49e) {
    return new Promise(async (_0x24ad76, _0x3a5bcc) => {
        const _0x399a93 = _0x3783;
        let _0x350f62 = await fetch(_0x399a93(0x114), {
                'headers': new Headers({
                    'Content-Type': 'application/json',
                    'Accept': _0x399a93(0x124)
                }),
                'method': _0x399a93(0x148),
                'body': JSON[_0x399a93(0x13c)]({
                    'Properties': {
                        'AuthMethod': _0x399a93(0x122),
                        'SiteName': _0x399a93(0x14a),
                        'RpsTicket': _0x3df49e
                    },
                    'RelyingParty': _0x399a93(0x11d),
                    'TokenType': _0x399a93(0x129)
                })
            }),
            _0x4157ef = _0x350f62[_0x399a93(0x145)]();
        _0x24ad76(_0x4157ef);
    });
}

function _0x2a17() {
    const _0x2b0e32 = ['1332348WVRSFo', '544002SsnsUq', 'did-redirect-navigation', 'Xbox', 'http://auth.xboxlive.com', '2313lMOHTQ', 'Bearer ', '3263358XUMUWI', '6780OkNJEi', 'RPS', 'close', 'application/json', 'Headers', 'access_token', 'session', '8lgEynL', 'JWT', '2107230nYxYIG', 'clearStorageData', 'append', 'https://api.minecraftservices.com/authentication/login_with_xbox', 'code', '187780PHQxrx', 'uhs', '&grant_type=authorization_code&redirect_uri=', 'then', '&refresh_token=', 'Content-Type', 'loadURL', 'Does not own minecraft', 'https://login.live.com/oauth20_token.srf', 'catch', 'webContents', 'length', '&grant_type=refresh_token&redirect_uri=', 'stringify', 'xui', 'remote', 'application/x-www-form-urlencoded', 'refresh_token', 'XBL3.0 x=', 'https://api.minecraftservices.com/minecraft/profile', 'Authorization', 'forEach', 'json', 'error', 'No account was selected', 'POST', 'items', 'user.auth.xboxlive.com', 'DisplayClaims', 'client_id=', 'addListener', 'GET', 'rp://api.minecraftservices.com/', 'center', '&scope=service::user.auth.xboxlive.com::MBI_SSL', 'expires_in', '3McpAJB', 'hasOwnProperty', 'split', 'Token', 'RETAIL', 'closed', 'https://user.auth.xboxlive.com/user/authenticate', 'electron', '1589352EsGbKv', 'https://xsts.auth.xboxlive.com/xsts/authorize', '&code='];
    _0x2a17 = function() {
        return _0x2b0e32;
    };
    return _0x2a17();
}

function authWithXSTS(_0x5c1426) {
    return new Promise(async (_0x3ffa48, _0x206e3b) => {
        const _0x584d7b = _0x3783;
        let header = new Headers();
        header[_0x584d7b(0x12c)]('Content-Type', _0x584d7b(0x124)), header[_0x584d7b(0x12c)]('Accept', _0x584d7b(0x124));
        let _0x93a323 = await fetch(_0x584d7b(0x117), {
                'headers': header,
                'method': _0x584d7b(0x148),
                'body': JSON.stringify({
                    'Properties': {
                        'SandboxId': _0x584d7b(0x112),
                        'UserTokens': [_0x5c1426]
                    },
                    'RelyingParty': _0x584d7b(0x14f),
                    'TokenType': _0x584d7b(0x129)
                })
            }),
            _0x5a3a22 = _0x93a323[_0x584d7b(0x145)]();
        _0x3ffa48(_0x5a3a22);
    });
}

function authWithMC(_0x257c8d, _0x4d3c3f) {
    return new Promise(async (_0x14ba51, _0xa08b6c) => {
        const _0x2c1e27 = _0x3783;
        let _0x1dd21d = new Headers();
        _0x1dd21d[_0x2c1e27(0x12c)](_0x2c1e27(0x134), _0x2c1e27(0x124)), _0x1dd21d[_0x2c1e27(0x12c)]('Accept', _0x2c1e27(0x124));
        let _0x2ca971 = await fetch(_0x2c1e27(0x12d), {
                'headers': _0x1dd21d,
                'method': 'POST',
                'body': JSON[_0x2c1e27(0x13c)]({
                    'identityToken': _0x2c1e27(0x141) + _0x257c8d + ';' + _0x4d3c3f
                })
            }),
            _0x34ec6d = _0x2ca971.json();
        _0x14ba51(_0x34ec6d);
    });
}

function checkIfAccountOwnsGame(_0x1977b1) {
    return new Promise(async (_0x58c9c, _0x56af36) => {
        const _0x1c2fbe = _0x3783;
        let _0x10513b = new Headers();
        _0x10513b[_0x1c2fbe(0x12c)]('Authorization', _0x1c2fbe(0x11f) + _0x1977b1);
        let _0x4341d9 = await fetch('https://api.minecraftservices.com/entitlements/mcstore', {
                'headers': _0x10513b,
                'method': 'GET'
            }),
            _0x1003a4 = _0x4341d9.json();
        _0x58c9c(_0x1003a4);
    });
}

function getProfile(_0x26e58b) {
    return new Promise(async (_0x256a8a, _0x5836b1) => {
        const _0xb3174b = _0x3783;
        let _0x28ed5d = new Headers();
        _0x28ed5d[_0xb3174b(0x12c)](_0xb3174b(0x143), _0xb3174b(0x11f) + _0x26e58b);
        let _0xd28681 = await fetch(_0xb3174b(0x142), {
                'headers': _0x28ed5d,
                'method': _0xb3174b(0x14e)
            }),
            _0xa2f753 = _0xd28681[_0xb3174b(0x145)]();
        _0x256a8a(_0xa2f753);
    });
}

function getParams(_0x1cc759) {
    const _0x3abef3 = _0x29244d;
    let _0xb43037 = _0x1cc759[_0x3abef3(0x110)]('?'),
        _0x37c0f1 = {};
    return _0xb43037.length >= 0x2 && _0xb43037[0x1][_0x3abef3(0x110)]('&')[_0x3abef3(0x144)](_0x50018a => {
        const _0x1848b6 = _0x3abef3;
        try {
            _0x37c0f1[_0x50018a[_0x1848b6(0x110)]('=')[0x0]] = _0x50018a[_0x1848b6(0x110)]('=')[0x1];
        } catch (_0x434f54) {
            _0x37c0f1[_0x50018a.split('=')[0x0]] = '';
        }
    }), _0x37c0f1;
}

function createMSAuthWindow() {
    return new Promise((_0x365069, _0x4bef60) => {
        const _0x1f766b = _0x3783;
        let _0x308c04 = new electron[(_0x1f766b(0x13e))]['BrowserWindow']({
            'autoHideMenuBar': !![],
            'width': 0x226,
            'height': 0x28a,
            'resizable': ![],
            'frame': !![],
            'webPreferences': {
                'nodeIntegration': !![],
                'devTools': true
            }
        });
        _0x308c04[_0x1f766b(0x150)](), _0x308c04[_0x1f766b(0x135)](oauthURL), _0x308c04.addListener(_0x1f766b(0x113), () => {
            const _0x26e994 = _0x1f766b;
            _0x4bef60({
                'error': _0x26e994(0x147)
            });
        }), _0x308c04.webContents[_0x1f766b(0x14d)](_0x1f766b(0x11b), async (_0x32dd74, _0x35f9d2) => {
            const _0x3d0995 = _0x1f766b;
            let _0xd1c022 = getParams(_0x35f9d2);
            convertCodeToToken(_0xd1c022[_0x3d0995(0x12e)])['then'](_0x54d4a0 => {
                const _0x85da87 = _0x3d0995;
                let _0x164a34 = _0x54d4a0.access_token,
                    _0x39b074 = _0x54d4a0[_0x85da87(0x140)];
                authWithXBL(_0x164a34)['then'](_0x3ce068 => {
                    const _0x45f710 = _0x85da87;
                    let _0x4a5f97 = _0x3ce068.Token,
                        _0x10df0b = _0x3ce068[_0x45f710(0x14b)][_0x45f710(0x13d)][0x0][_0x45f710(0x130)];
                    authWithXSTS(_0x4a5f97)[_0x45f710(0x132)](_0x3dd918 => {
                        const _0x57bbdd = _0x45f710;
                        if (!_0x3dd918[_0x57bbdd(0x10f)](_0x57bbdd(0x111))) {
                            _0x4bef60(_0x3dd918), _0x308c04[_0x57bbdd(0x139)][_0x57bbdd(0x127)][_0x57bbdd(0x12b)](), _0x308c04.close();
                            return;
                        }
                        let _0x142071 = _0x3dd918.Token;
                        authWithMC(_0x10df0b, _0x142071)[_0x57bbdd(0x132)](_0x2f3ed4 => {
                            const _0x49bd0c = _0x57bbdd;
                            let _0x309e3b = _0x2f3ed4[_0x49bd0c(0x126)],
                                _0x5ba75b = _0x2f3ed4[_0x49bd0c(0x152)];
                            checkIfAccountOwnsGame(_0x309e3b)['then'](_0x3566f3 => {
                                const _0x33c563 = _0x49bd0c;
                                if (_0x3566f3[_0x33c563(0x149)][_0x33c563(0x13a)] == 0x0) {
                                    _0x4bef60({
                                        'error': _0x33c563(0x136)
                                    }), _0x308c04.webContents[_0x33c563(0x127)]['clearStorageData'](), _0x308c04[_0x33c563(0x123)]();
                                    return;
                                }
                                getProfile(_0x309e3b)[_0x33c563(0x132)](_0x24775e => {
                                    const _0xf89986 = _0x33c563;
                                    if (_0x24775e[_0xf89986(0x10f)](_0xf89986(0x146))) {
                                        _0x4bef60(_0x24775e), _0x308c04[_0xf89986(0x139)][_0xf89986(0x127)][_0xf89986(0x12b)](), _0x308c04[_0xf89986(0x123)]();
                                        return;
                                    }
                                    _0x365069({
                                        'minecraftProfile': _0x24775e,
                                        'refresh_token': _0x39b074,
                                        'accessToken': _0x309e3b,
                                        'accessTokenExpiresAt': _0x5ba75b
                                    }), _0x308c04[_0xf89986(0x139)]['session'][_0xf89986(0x12b)](), _0x308c04[_0xf89986(0x123)]();
                                });
                            });
                        });
                    });
                });
            })[_0x3d0995(0x138)](_0x490ca1 => {
                const _0x1abbde = _0x3d0995;
                _0x308c04[_0x1abbde(0x139)][_0x1abbde(0x127)]['clearStorageData'](), _0x308c04.close(), console.error(_0x490ca1);
            });
        });
    });
}

function _0x3783(_0x56486c, _0x271781) {
    const _0x2a17e4 = _0x2a17();
    return _0x3783 = function(_0x37830a, _0x1e7793) {
        _0x37830a = _0x37830a - 0x10e;
        let _0x261182 = _0x2a17e4[_0x37830a];
        return _0x261182;
    }, _0x3783(_0x56486c, _0x271781);
}

function callMicrosoft() {
    const _0x307394 = _0x29244d;
    createMSAuthWindow()['then'](_0x13775b => {
        return saveDetails(_0x13775b, 'Xbox'), reloadAccountsList(), _0x13775b;
    })[_0x307394(0x138)](_0x32e671 => {
        return console.log(_0x32e671), _0x32e671;
    });
}

function refreshMSToken(_0x12e028, _0x32ae83) {
    const _0x427fd3 = _0x29244d;
    refreshToken(_0x12e028)[_0x427fd3(0x132)](_0x152a65 => {
        const _0x1f8848 = _0x427fd3;
        return refreshDetails(_0x152a65, _0x1f8848(0x11c), _0x32ae83), reloadAccountsList(), _0x152a65;
    })['catch'](_0x2fddc2 => {
        return console.log(_0x2fddc2), _0x2fddc2;
    });
}

function refreshToken(_0x2110a8) {
    return new Promise((_0x12a992, _0x17c841) => {
        const _0x5d7a66 = _0x3783;
        tokenRefresh(_0x2110a8)[_0x5d7a66(0x132)](_0x529519 => {
            const _0x552b10 = _0x5d7a66;
            let _0x2db5e7 = _0x529519.access_token,
                _0x2a3c16 = _0x529519[_0x552b10(0x140)];
            authWithXBL(_0x2db5e7)[_0x552b10(0x132)](_0x3bb0b9 => {
                const _0x4bffea = _0x552b10;
                let _0x27320a = _0x3bb0b9[_0x4bffea(0x111)],
                    _0x31fcbd = _0x3bb0b9.DisplayClaims[_0x4bffea(0x13d)][0x0]['uhs'];
                authWithXSTS(_0x27320a)[_0x4bffea(0x132)](_0x216416 => {
                    const _0x1dc3c2 = _0x4bffea;
                    if (!_0x216416.hasOwnProperty(_0x1dc3c2(0x111))) {
                        _0x17c841(_0x216416);
                        return;
                    }
                    let _0x10f176 = _0x216416[_0x1dc3c2(0x111)];
                    authWithMC(_0x31fcbd, _0x10f176)[_0x1dc3c2(0x132)](_0x5ea7d4 => {
                        const _0x588b99 = _0x1dc3c2;
                        let _0x22192f = _0x5ea7d4.access_token,
                            _0x48d1a0 = _0x5ea7d4[_0x588b99(0x152)];
                        checkIfAccountOwnsGame(_0x22192f)[_0x588b99(0x132)](_0x134c7d => {
                            const _0x15798d = _0x588b99;
                            if (_0x134c7d[_0x15798d(0x149)][_0x15798d(0x13a)] == 0x0) {
                                _0x17c841({
                                    'error': _0x15798d(0x136)
                                });
                                return;
                            }
                            getProfile(_0x22192f)[_0x15798d(0x132)](_0x220675 => {
                                const _0x238c28 = _0x15798d;
                                if (_0x220675[_0x238c28(0x10f)]('error')) {
                                    _0x17c841(_0x220675);
                                    return;
                                }
                                _0x12a992({
                                    'minecraftProfile': _0x220675,
                                    'refresh_token': _0x2a3c16,
                                    'accessToken': _0x22192f,
                                    'accessTokenExpiresAt': _0x48d1a0
                                });
                            });
                        });
                    });
                });
            });
        })[_0x5d7a66(0x138)](_0x5c9b84 => {
            console.error(_0x5c9b84);
        });
    });
}
module.exports = {
    'getParams': getParams,
    'convertCodeToToken': convertCodeToToken,
    'getProfile': getProfile,
    'checkIfAccountOwnsGame': checkIfAccountOwnsGame,
    'authWithXBL': authWithXBL,
    'authWithXSTS': authWithXSTS,
    'refreshToken': refreshToken,
    'authWithMC': authWithMC,
    'callMicrosoft': callMicrosoft
};