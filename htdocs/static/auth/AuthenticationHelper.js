const { getAppDataPath } = require('appdata-path');
const detailsPath = getAppDataPath("Clover Client") + "/accounts.json";
const uuidGenerator = require("uuid");

function _0x2869(_0x9ccbd0, _0x47b342) {
    const _0x2ed819 = _0x2ed8();
    return _0x2869 = function(_0x2869b0, _0x407d32) {
        _0x2869b0 = _0x2869b0 - 0xd3;
        let _0x2edc57 = _0x2ed819[_0x2869b0];
        return _0x2edc57;
    }, _0x2869(_0x9ccbd0, _0x47b342);
}
const _0x52e8e8 = _0x2869;
(function(_0x48f19f, _0x93f4d9) {
    const _0x4eb512 = _0x2869,
        _0x4e4cba = _0x48f19f();
    while (!![]) {
        try {
            const _0xef2add = -parseInt(_0x4eb512(0xf3)) / 0x1 * (parseInt(_0x4eb512(0xe6)) / 0x2) + -parseInt(_0x4eb512(0xde)) / 0x3 * (-parseInt(_0x4eb512(0xeb)) / 0x4) + parseInt(_0x4eb512(0x104)) / 0x5 * (-parseInt(_0x4eb512(0xed)) / 0x6) + parseInt(_0x4eb512(0xe7)) / 0x7 * (parseInt(_0x4eb512(0xf9)) / 0x8) + -parseInt(_0x4eb512(0xdf)) / 0x9 * (parseInt(_0x4eb512(0xee)) / 0xa) + -parseInt(_0x4eb512(0x107)) / 0xb + parseInt(_0x4eb512(0x101)) / 0xc;
            if (_0xef2add === _0x93f4d9) break;
            else _0x4e4cba['push'](_0x4e4cba['shift']());
        } catch (_0x14ae12) {
            _0x4e4cba['push'](_0x4e4cba['shift']());
        }
    }
}(_0x2ed8, 0xb8ae8));

function _0x2ed8() {
    const _0x3ccd49 = ['45ekFlfK', 'parse', 'accessTokenExpiresAt', 'minecraftProfile', 'clientToken', 'selectedProfile', 'name', '1039868LxaQvu', '161AUEvdp', '[Validator] No accounts to validate', 'Xbox', 'Mojang', '2301892HCrMhA', 'length', '554214iaLdyF', '2592550DRvNsy', 'toISOString', 'refresh_token', '/accounts.json', 'existsSync', '1oxPfYQ', 'account', 'accessToken', 'refreshToken', 'type', '[Mojang] Token invalid. Removed account', '144544HlhxGJ', 'mojangClientToken', 'user', 'keys', 'log', 'activeAccountLocalId', '[Microsoft] Refreshing the token', 'replace', '18424464TVAUZg', 'username', 'writeFileSync', '15uxkKpL', 'join', 'utf8', '2773210NblgXk', 'Empty file detected, overwriting', 'values', 'now', 'No accounts saved', 'toString', 'minecraft', 'split', '[Microsoft] Token still valid', 'readFileSync', 'accounts', 'uuid', 'stringify', '6VUjlIm'];
    _0x2ed8 = function() {
        return _0x3ccd49;
    };
    return _0x2ed8();
}

tokenValidator();
function addAccount(accountObject, type, username, profileUsername, playerId, refreshToken, expiresAt) {
    for (var i = 0; i < Object.values(getDetails().accounts).length; i++) {
        if (Object.values(getDetails().accounts)[i].minecraftProfile.id == playerId) {
            alert("That account is already logged in!");
            return;
        }
    }

    localId = uuidGenerator.v4().split('-').join(''),

    accountObj = {
        'accessToken': accountObject.accessToken,
        'accessTokenExpiresAt': expiresAt,
        'refreshToken': refreshToken,
        'legacy': ![],
        'localId': localId,
        'minecraftProfile': {
            'id': playerId,
            'name': profileUsername
        },
        'type': type,
        'username': username
    };

    return {
        'account': accountObj,
        'uuid': localId
    };
}

function saveDetails(accObj, type) {
    if (type == "Xbox") (account_username = '', profile_uuid = accObj.minecraftProfile.id, profile_username = accObj.minecraftProfile.name, mojangClientToken = uuidGenerator.v4().split('-').join(''), refresh_token = accObj.refresh_token, accessTokenExpiresAt = new Date(Date.now() + accObj.accessTokenExpiresAt * 1000).toISOString());
    const account = addAccount(accObj, type, account_username, profile_username, profile_uuid, refresh_token, accessTokenExpiresAt);
    var localIdToUse = account.uuid;

    if (localIdToUse == "localId") {

    }

    let obj = {
        'accounts': {},
        'mojangClientToken': mojangClientToken,
        'activeAccountLocalId': account.uuid
    };

    try {
        let launcherAccounts;
        launcherAccounts = JSON.parse(fs.readFileSync(detailsPath)), fs.existsSync(detailsPath) && Object.values(launcherAccounts.accounts)[0].minecraftProfile !== null && (obj = JSON.parse(fs.readFileSync(detailsPath, "utf8")));
    } catch (ignored) {
        console.log("[CC] Empty file detected, overwriting");
    }

    // kind had to leave this in here, for some reason it doesnt work without it. (its "account" but doesnt work when I put it there.)'
    console.log(_0x52e8e8(0xf4))
    obj.accounts[account.uuid] = account[_0x52e8e8(0xf4)], fs.writeFileSync(detailsPath, JSON.stringify(obj, null, 2));
}

function getDetails() {
    if (!fs.existsSync(getAppDataPath("Clover Client/accounts.json"))) return {
        'success': false,
        'error': "No accounts saved"
    };
    return JSON.parse(fs.readFileSync(detailsPath));
}

function tokenValidator() {
    try {
        if (fs.existsSync(detailsPath) && Object.values(JSON.parse(fs.readFileSync(detailsPath)).accounts)[0].minecraftProfile !== null)
            for (var i = 0; i < Object.values(getDetails().accounts).length; i++) {
                if (Object.keys(getDetails().accounts)[i] == getDetails().activeAccountLocalId) {
                    access_token = Object.values(getDetails().accounts)[i]['accessToken'], accessTokenExpiresAt = Object.values(getDetails().accounts)[i].accessTokenExpiresAt, msRefreshToken = Object.values(getDetails().accounts)[i].refreshToken, type = Object.values(getDetails().accounts)[i].type, clientToken = Object.values(getDetails().mojangClientToken).toString().replace(/,/g, ''), account_id = Object.values(getDetails().accounts)[i].localId;
                    if (type == "Xbox") {
                        accessTokenExpiresAt < new Date().toISOString() ? (refreshMSToken(msRefreshToken, account_id), console.log("[Microsoft] Refreshing the token")) : console.log("[Microsoft] Token still valid");
                    }
                    // removed Mojang accounts because we are not going to support them.
                }
            }
    } catch (ignored) {
        console.log("[CC] No accounts to validate");
        callMicrosoft();
    }
}

function logout(localIdToFind) {
    let rawAccountsFile = fs.readFileSync(process.env.APPDATA + "/Clover Client/accounts.json");
    let accountFileJson = JSON.parse(rawAccountsFile);
    let accountsJson = accountFileJson.accounts;

    Object.keys(accountsJson).forEach(function(key) {
        let account = getAccountObj(accountsJson[key]);
        if (account.localId == localIdToFind) {
            delete accountsJson[localIdToFind];
            accountFileJson.activeAccountLocalId = "";
        }
    });

    fs.writeFileSync(detailsPath, JSON.stringify(accountFileJson, 0x2));
    //reloadAccountsList();
}

function refreshDetails(accountObj, type, localId) {
    jsonFile = JSON.parse(fs.readFileSync(detailsPath, 'utf8'));
    
    if (type == "Mojang") return;
    
    else type == 'Xbox' && (account_username = '', profile_uuid = accountObj.minecraftProfile.id, profile_username = accountObj.minecraftProfile.name, mojangClientToken = uuidGenerator.v4().split('-').join(''), refresh_token = accountObj.refresh_token, accessTokenExpiresAt = new Date(Date.now() + accountObj.accessTokenExpiresAt * 1000).toISOString());
    
    console.log(localId);

    jsonFile.accounts.localId = {
        'accessToken': accountObj.accessToken,
        'accessTokenExpiresAt': accessTokenExpiresAt,
        'refreshToken': refresh_token,
        'legacy': ![],
        'localId': localId,
        'minecraftProfile': {
            'id': profile_uuid,
            'name': profile_username
        },
        'type': type,
        'username': account_username
    }, fs.writeFileSync(detailsPath, JSON.stringify(jsonFile, null, 2));
}