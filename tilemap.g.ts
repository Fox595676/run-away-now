// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000003010103000000000000000000000000000101000001000001010101010101010101010000010000000000000000000000010100000100000000000000010100000101000001000000000001010000000001010000010100000101000000000004010100000001000000000000000000000101000001010000010101010100000001010000010000000000000001010100010100000000000000000000000001010101000000010101000000010101010101010003000000000000000000000000010100000000000001010101000000000101010101010101010101010101020201`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . 2 2 . . 2 
2 . . 2 . . . . . 2 2 . . . . 2 
2 . . 2 2 . . 2 2 . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . 2 2 . . 2 2 2 2 2 . . . 2 
2 . . 2 . . . . . . . 2 2 2 . 2 
2 . . . . . . . . . . . . 2 2 2 
2 . . . 2 2 2 . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
