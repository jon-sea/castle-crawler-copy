enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkdown,
    walkup,
    walkright,
    idle_down,
    idle_up,
    idle_right,
    idle_left,
    walkleft
}
namespace SpriteKind {
    export const sword = SpriteKind.create()
    export const enemy_unaware = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b d d d d d d d d d d d d d d c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
c c f f f f f f f f f f f f c a 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b d d d d d d d d d d d d d d c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
c c f f f f f f f f f f f f c a 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
d b b c 2 2 2 2 c 2 2 1 1 1 1 1 
d b b c 2 2 2 2 c 2 2 2 1 1 1 1 
d b b c c 2 2 c c c 2 2 c 1 1 1 
d b b 1 b b b b b b b b b b 1 1 
d b b c 1 c c c c c c c c c c 1 
d b b 2 c 1 2 c 2 c c 2 c 2 c c 
d b b 2 2 2 1 c 2 2 2 2 c 2 2 2 
d b b 2 2 2 2 1 2 2 2 2 c 2 2 2 
d b b c 2 2 c c 1 2 2 c c c 2 2 
d b b b b b b b b 1 b b b b b b 
d b b c c c c c c c 1 c c c c c 
d b b c 2 c c 2 c 2 c 1 2 c 2 c 
d b b c 2 2 2 2 c 2 2 2 1 c 2 2 
d d b b 2 2 2 2 c 2 2 2 2 1 2 2 
d d d b c 2 2 c c c 2 2 c c 1 2 
. d d b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
2 2 c 2 2 2 2 c 2 2 2 2 c b b d 
1 2 c 2 2 2 2 c 2 2 2 2 c b b d 
1 1 c c 2 2 c c c 2 2 c c b b d 
1 1 1 b b b b b b b b b b b b d 
1 1 1 1 c c c c c c c c c b b d 
1 1 1 1 1 2 c 2 c c 2 c c b b d 
2 1 1 1 1 1 c 2 2 2 2 c c b b d 
2 c 1 1 1 1 1 2 2 2 2 c c b b d 
c c c 1 1 1 1 1 2 2 c c c b b d 
b b b b 1 1 1 1 1 b b b b b b d 
c c c c c 1 1 1 1 1 c c c b b d 
c 2 c 2 c c 1 1 1 1 1 2 c b b d 
2 2 c 2 2 2 2 1 1 1 1 1 c b b d 
2 2 c 2 2 2 2 c 1 1 1 1 b b d d 
2 c c c 2 2 c c c 1 1 1 b d d d 
b b b b b b b b b b b b b d d . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
d d d d d d d d d d d d d d d d 
d b b b b b b b b b b b b b b b 
d b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d 
d b b b b b b b b b b b b b b b 
d b b b b b b b b b b b b b b b 
d b b b 1 1 c c c c c c c c c c 
d b b 1 1 1 1 c c c c c c c c c 
d b b 1 1 1 1 1 c c c c c c c c 
d b b 2 1 1 1 1 1 c c 2 c 2 c c 
d b b 2 2 1 1 1 1 1 2 2 c 2 2 2 
d b b 2 2 2 1 1 1 1 1 2 c 2 2 2 
d b b c 2 2 c 1 1 1 1 1 c c 2 2 
d b b b b b b b 1 1 1 1 1 b b b 
d b b c c c c c c 1 1 1 1 1 c c 
d b b c 2 c c 2 c 2 1 1 1 1 1 c 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b d 
b b b b b b b b b b b b b b b d 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b d 
b b b b b b b b b b b b b b b d 
c c c c c c c c c c c c b b b d 
c c c c c c c c c c c c c b b d 
c c c c c c c c c c c c c b b d 
2 c 2 c c 2 c 2 c c 2 c c b b d 
2 c 2 2 2 2 c 2 2 2 2 c c b b d 
2 c 2 2 2 2 c 2 2 2 2 c c b b d 
c c c 2 2 c c c 2 2 c c c b b d 
b b b b b b b b b b b b b b b d 
c c c c c c c c c c c c c b b d 
c 2 c 2 c c 2 c 2 c c 2 c b b d 
`
}
function snake_anim () {
	
}
sprites.onOverlap(SpriteKind.sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    coin = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Food)
    animation.runImageAnimation(
    coin,
    [img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`,img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 3 5 1 5 b 
. c 5 3 5 1 d c 
. c 5 d 1 d d c 
. . f d d d f . 
. . . f f f . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`,img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`],
    200,
    true
    )
    coin.setPosition(otherSprite.x, otherSprite.y)
    otherSprite.destroy()
    scene.cameraShake(4, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((mySprite.tileKindAt(TileDirection.Top, myTiles.tile4) || mySprite.tileKindAt(TileDirection.Top, myTiles.tile5)) && vertical == -1 || (mySprite.tileKindAt(TileDirection.Right, myTiles.tile4) || mySprite.tileKindAt(TileDirection.Left, myTiles.tile5)) || (mySprite.tileKindAt(TileDirection.Right, myTiles.tile6) || mySprite.tileKindAt(TileDirection.Left, myTiles.tile7))) {
        game.showLongText("it's a health vending machine!", DialogLayout.Bottom)
        if (info.score() > 4) {
            if (info.life() < 10) {
                info.changeScoreBy(-5)
                music.magicWand.play()
                info.changeLifeBy(1)
            } else {
                game.showLongText("but your health is already full.", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("you don't have enough money.", DialogLayout.Bottom)
        }
    } else if (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp) && vertical == -1) {
        music.pewPew.play()
        tiles.setTileAt(tiles.getTileLocation(23, 25), sprites.dungeon.greenSwitchDown)
        tiles.setTileAt(tiles.getTileLocation(34, 3), sprites.dungeon.greenInnerSouthWest)
        tiles.setTileAt(tiles.getTileLocation(34, 4), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(34, 5), sprites.dungeon.greenInnerNorthWest)
        tiles.setWallAt(tiles.getTileLocation(34, 4), false)
        game.showLongText("a door opened somewhere!", DialogLayout.Bottom)
    } else if (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.chestClosed) && vertical == -1 || mySprite.tileKindAt(TileDirection.Right, sprites.dungeon.chestClosed) && horizontal == 1 || mySprite.tileKindAt(TileDirection.Left, sprites.dungeon.chestClosed) && horizontal == -1) {
        reward = Math.randomRange(0, 4)
        music.jumpUp.play()
        tiles.setTileAt(tiles.getTileLocation(23, 1), sprites.dungeon.chestOpen)
        game.showLongText("you obtained...", DialogLayout.Bottom)
        mySprite.setImage(treasure[reward])
        game.showLongText(text_list[reward], DialogLayout.Bottom)
        game.over(true)
    } else {
        if (swingsword == 0) {
            music.pewPew.play()
            swingsword = 1
            speed = 0
            pause(200)
            swingsword = 0
            speed = 70
            sword2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (unhurtable == 0) {
        info.changeLifeBy(-1)
        music.playMelody("B F C - - - - - ", 960)
        unhurtable = 1
        scene.cameraShake(4, 100)
        pause(3000)
        unhurtable = 0
    }
})
function player_anim () {
    anim_idle_down = animation.createAnimation(ActionKind.idle_down, 100)
    animation.attachAnimation(mySprite, anim_idle_down)
    anim_idle_down.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_idle_up = animation.createAnimation(ActionKind.idle_up, 100)
    animation.attachAnimation(mySprite, anim_idle_up)
    anim_idle_up.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_idle_right = animation.createAnimation(ActionKind.idle_right, 100)
    animation.attachAnimation(mySprite, anim_idle_right)
    anim_idle_right.addAnimationFrame(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    anim_idle_left = animation.createAnimation(ActionKind.idle_left, 100)
    animation.attachAnimation(mySprite, anim_idle_left)
    anim_idle_left.addAnimationFrame(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    anim_walk_down = animation.createAnimation(ActionKind.walkdown, 200)
    animation.attachAnimation(mySprite, anim_walk_down)
    anim_walk_down.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_walk_down.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`)
    anim_walk_down.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_walk_down.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`)
    anim_walk_up = animation.createAnimation(ActionKind.walkup, 200)
    animation.attachAnimation(mySprite, anim_walk_up)
    anim_walk_up.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_walk_up.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`)
    anim_walk_up.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    anim_walk_up.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`)
    anim_walk_right = animation.createAnimation(ActionKind.walkright, 200)
    animation.attachAnimation(mySprite, anim_walk_right)
    anim_walk_right.addAnimationFrame(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
    anim_walk_left = animation.createAnimation(ActionKind.walkleft, 200)
    animation.attachAnimation(mySprite, anim_walk_left)
    anim_walk_left.addAnimationFrame(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
}
let anim_walk_left: animation.Animation = null
let anim_walk_right: animation.Animation = null
let anim_walk_up: animation.Animation = null
let anim_walk_down: animation.Animation = null
let anim_idle_left: animation.Animation = null
let anim_idle_right: animation.Animation = null
let anim_idle_up: animation.Animation = null
let anim_idle_down: animation.Animation = null
let reward = 0
let horizontal = 0
let coin: Sprite = null
let vertical = 0
let speed = 0
let swingsword = 0
let unhurtable = 0
let sword2: Sprite = null
let mySprite: Sprite = null
let snake_alert_right: animation.Animation = null
let snake_alert_left: animation.Animation = null
let snake_idle: animation.Animation = null
let snake: Sprite = null
let text_list: string[] = []
let treasure: Image[] = []
treasure = [img`
. . . . . . . . . . . . . . . . f . . . 
. . . . . . . . . . . . . . . f 4 f . . 
. . . . . . . . . . . . . . f 4 1 4 f . 
. . . . . . . . . . . . . f 4 5 5 1 4 f 
. . . . . . . . . . . . . f 4 4 5 4 4 f 
. . . . . . . . . . . . . f 4 5 4 5 4 f 
. . . . . . . . . . . . . f 4 5 5 5 4 f 
. . . . . f f f f . . . . . f 4 5 4 f . 
. . . f f f 2 2 f f f . . . f 4 5 4 f . 
. . f f f 2 2 2 2 f f f . . f 4 5 4 f . 
. f f f e e e e e e f f f f 4 5 5 5 4 f 
. f f e 2 2 2 2 2 2 e e f 4 4 4 4 4 4 4 
. f e 2 f f f f f f 2 e f f 4 d d e 4 f 
. f f f f b f e e f b f f . 4 d d d 4 . 
f f e f 4 1 f 4 4 f 1 e f f e d d d 4 . 
f e e 4 d d d d d d 4 e e f . e 4 4 . . 
. f e e d d d d d d e e f . . . . . . . 
. . f e e 4 4 4 4 e e f . . . . . . . . 
. e 4 f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 d f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 4 f 4 4 5 5 4 4 f . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . f f f f f . 
. . . f f f 2 2 f f f . . f 4 5 5 5 5 f 
. . f f f 2 2 2 2 f f f f 4 5 5 5 1 5 5 
. f f f e e e e e e f f f 4 5 5 5 5 1 5 
. f f e 2 2 2 2 2 2 e e f 5 5 5 5 5 5 5 
. f e 2 f f f f f f 2 e f 5 5 5 5 5 5 5 
. f f f f b f e e f b f f 5 4 e 4 e 4 e 
f f e f 4 1 f 4 4 f 1 e f f 4 d d d 4 f 
f e e 4 d d d d d d 4 e e f f e 4 4 f . 
. f e e d d d d d d e e f . . . . . . . 
. . f e e 4 4 4 4 e e f . . . . . . . . 
. e 4 f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 d f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 4 f 4 4 5 5 4 4 f . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f . 
. . . . . f f f f . . . . . f 6 d 1 f . 
. . . f f f 2 2 f f f . . . f 6 1 d f . 
. . f f f 2 2 2 2 f f f . . f 6 d 1 f . 
. f f f e e e e e e f f f . f 6 6 f . . 
. f f e 2 2 2 2 2 2 e e f . f 4 4 4 . . 
. f e 2 f f f f f f 2 e f . 4 d d e 4 . 
. f f f f b f e e f b f f . 4 d d d 4 . 
f f e f 4 1 f 4 4 f 1 e f f e d d d 4 . 
f e e 4 d d d d d d 4 e e f . e 4 4 . . 
. f e e d d d d d d e e f . . . . . . . 
. . f e e 4 4 4 4 e e f . . . . . . . . 
. e 4 f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 d f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 4 f 4 4 5 5 4 4 f . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . 2 f f . . 
. . . f f f 2 2 f f f . . . . f f f . . 
. . f f f 2 2 2 2 f f f . . . f 6 f . . 
. f f f e e e e e e f f f . . 6 f 6 . . 
. f f e 2 2 2 2 2 2 e e f . . 4 4 4 . . 
. f e 2 f f f f f f 2 e f . 4 d d e 4 . 
. f f f f b f e e f b f f . 4 d d d 4 . 
f f e f 4 1 f 4 4 f 1 e f f e d d d 4 . 
f e e 4 d d d d d d 4 e e f . e 4 4 . . 
. f e e d d d d d d e e f . . . . . . . 
. . f e e 4 4 4 4 e e f . . . . . . . . 
. e 4 f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 d f 2 2 2 2 2 2 f . . . . . . . . . 
. 4 4 f 4 4 5 5 4 4 f . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . 
`, img`
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f 6 6 6 6 6 6 f f f . . 
. . f f 6 8 8 8 8 8 8 6 6 f . . 
. . f 6 8 f f f f f f 8 6 f . . 
. . f f f b f e e f b f f f . . 
. f f e f 1 f 4 4 f 1 f e f f . 
. f e e 4 d d d d d d 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`]
text_list = ["a golden sword!", "a golden orb!", "a toothbrush!", "a tv remote!", "a new hat!"]
info.setScore(0)
info.setLife(10)
tiles.setTilemap(tiles.createTilemap(
            hex`50003200000000000000000000000000080e0e37380e0e0e0e0e0e060e0e0e0e0e0e060e1909000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f240135360101160015241d24010d0d0101011c0113090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0101010124010a0017012401010101240124000101170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0101010101010f000c0101011c0000100101010101130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001401010124010814000c0d01240000000001240d01010c2222220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002021212121210d01010101010f00000c0d01010000000001010d010115000022000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020222d2d2d2d2d0d01010101011800000c0101011000001101010124011700002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f00000000001601010101010a0000170124012401010124010101150300002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f00000000000a01010d010114000013010101010d0d0101012415030008141113060900000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f000000000002040505050505050505050705050505050507050308191401010124130e090000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f0000000000000000000000000000000000000000000000000008142401010d0d010101130900000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f0000000000000000000000000000000000000000000000000814010101010124010101011309000000000000000000000000000000000000000000000000000000000000000000000000000008140d0d1309000000000000000000000020212121212b00000000000a01010d0101010101010d01010c00000000000000000000000000000000000000000000000000000000000000000000000000000a010101011300000000000000000000203122222222222b000000081401010115052727041601010113090000000000000000000000000000000000000000000000000000000000000000000000000018010101010d212b0000000000002021222222222231221f00000014012401010c152727160a010101010b0000000000000000000000000000000000000000000000000000000000000000000000000018010101010d2d312121212121212222222222222222222221212124010d010129290d24262601010d0101212121212121212b00000000000000000000000000000000000000000000000000000000000a010101011500002f30002f2d2d2d2222222222222222222d2d2d24010d01012929240d262601010d01012d2d2d2d2d2d2d2e2b000000000000000000000000000000000000000000000000000000000205040505030000000000000000002f222231222222221f00000016010101010c132828140a010101010c000000000000001e1f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000002f222222222222300000000216010101130e28280e140124011503000000000000001e1f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002f2d222d2d3000000000000f01010d0101010101010d01010c00000000000000001e1f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021601010101010101010101150300000000080e19140101130e0e09000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002160101240d0d010101150300000000000f01010101010101010c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020416010101241505030000000000000f01010101010101010c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002070101070300000000000000000a01011504160101010c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1f000000000000000000000f01010b1a0f0101010c0000000000000000000000000000000000000000000000000000000000080e190e0e060e0e0e0e0e190e0e0e32090000000000000000000000001e1f000000000000000000000f0101130e140101010c0000000000000000000000000000000000000000000000000000000008140101010c01010c240c0c240c0101010c00000000080e0e190e060e140101130e060e0e0e140000001401010101010101010c000000000000000000000000000000000000000000000000080e0e1914010101010c24010c010c0c240c01240117000000000f0d240101010101010101010101010d012222220101010101010101010c0000000000000000000000000000000000000000000000000a01010101010101011301010c240c0c240c0101010c000000001801010101012401010101012401010115160000150505160124011505030000000000000000000000000000000000000000000000081401010101010101012901011301130c010c0101010b000000000f0101010101010101110101010101010c0a0000000000001e1f0000000000000000000000000000000000000000000000000000000f0124010101010101012901012901291301130101010c000000000a2401011101010101010101010101010b0f0000000000001e1f0000000000000000000000000000000000000000000000000000000f0101010101010124012901012901292901290101010c000000000f0101010101010124010101010101010c0f0000000000001e1f0000000000000000000000000000000000000000000000000000000f0101010101010101012901012901291501150101010c000000000204051601010d0101010101010d01010c0f0000000000001e1f0000000000000000000000000000000000000000000000000000000f0101010101010101012901011501150c010c0101010c000000001a1a1a0a0101150705050505071601010c0f0000000000001e1f0000000000000000000000000000000000000000000000000000000f0101010101010101011501010c240c0c240c0101010c00000000080e0e14010113060e09080e0614010113060e091a0819140101130e190900000000000000000000000000000000000000000000000f0101011516010101010c24010c010c0c240c01240117000000000f01240101011124010c0a01010101010101010c1a0a010101010101010c00000000000000000000000000000000000000000000000f0101010c1a160101010c01010c240c0c240c0101010c000000000f01010101010101011314010101010101011113191401010d010d01010c00000000000000000000000000000000000000000000000f010101171a0205050504070405050505050505050503000000000f0101010d0d010101010101010d01010d0101010101010101240101110c00000000000000000000000000000000000000000000000f010101131a140000000000000000000000000000000000000000181101010d0d010101010101010d01010d010101010101010d010d01010c00000000000000000000000000000000000000000000000f010101010c0000000000000000000000000000000000000000000f010101010101010115160101010101010101150516010101010101010c00000000000000000000000000000000000000000000000f010101010c0000000000000000000000000000000000000000000f01240101010124010c0a01010101010101010c1a02160101010101010c00000000000000000000000000000000000000000000000f01010101130e0e0e09000000000000000000000000000000000002050516010115050503020705161212150407031a1a020404040404040300000000000000000000000000000000000000000000000f0101010101010101130e0e0e0e0e0e0e0e0e0e09000000000000080e0e140101130e1909000000000000000000000000000000000000000000000000000000000000000000000000000000000000000216010124010101010101010101010101010101130e0e0e37380e14010d010101010d010c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002160101010101010101010101010101010101010101013536010101010101010101010b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0101010101010101010124010101010101010124010101010101010124010101010c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000205050505051601010101010101010101010101010101010101010101012401010117000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020505050505050505050516010101010101010101010101010101010c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020505050505050516010d010101010d010c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020505050505050504030000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . 2 2 . . 2 . 2 . 2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . . . . 2 . 2 . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . . . . 2 . 2 . . . . 2 2 . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 . . . . . 2 2 . 2 . . . 2 . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . 2 . . 2 . . . 2 . . 2 . . . . . 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . . . 2 . . 2 . . . . 2 2 . . . . . . 2 . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 2 2 2 2 2 . . . . . 2 . . 2 . . . . . . . . . . . 2 2 . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . . . 2 . . . . . 2 . . 2 . . . . . . . . . . 2 2 . 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 . . 2 2 . . . . . . . . . . 2 . . . . . . 2 . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . 2 2 2 . . . . . . 2 2 . . . . . . . . 2 . . 2 2 . . . 2 2 . . 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 . . . . 2 2 . . 2 2 . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 . . 2 2 . 2 2 2 2 . . . . . . . . . 2 2 2 2 . . . . 2 2 . . 2 2 . . . . 2 2 2 2 2 2 2 2 . . 2 . . . 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 . 2 . . . 2 
. . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 . . . 2 2 . . 2 2 . . . 2 2 . . . . . . 2 . . 2 . . . . 2 . . . . . . 2 . . . . . 2 . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . 2 . . . . . . . . . . . . 2 . . . . . . . 2 . . 2 . . . . 2 . . . . . 2 . . . . . 2 . . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . . . 2 2 . . . . 2 2 2 2 . . 2 2 2 2 . 2 . . . . 2 . . . . . 2 . . . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 . . . . . 2 . . . . . . . . 2 . 2 . . . 2 . . . . . 2 . . . . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 2 2 2 . . . . . . 2 . . . . . . . . 2 . 2 . . 2 . . . . . 2 . . . . . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 2 . . . . . . . . 2 . . 2 2 2 . . . 2 . 2 . . 2 . . . . . 2 . . . . . 2 . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . 2 . . 2 . 2 . . . 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 . . 2 2 2 . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . 2 . . . . . . . . . 2 . . 2 2 2 . . . 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . 2 2 2 . . 2 2 2 . . . . . . . 
. . . 2 2 2 2 2 . . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . 2 2 . . . 2 . . . . . . 
. . . 2 . . . . . . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . 2 . . . . . . . 2 . . 2 . . . . . 
. . 2 2 . . . . . . . . . . . 2 . 2 2 . 2 . . . 2 . . . . 2 . . . . . . . . . . . . . . . 2 2 . . . . . 2 . . 2 . . . . . . . 2 . . . . . . . . 2 . 2 . . . . . 
. . 2 . . . . . . . . . . . . . . . 2 . 2 . . . 2 . . . . 2 . . . . . . . . . . . . . . . 2 2 . . . . . 2 . . 2 . . . . . . . 2 . . . . . . . . . . 2 . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . 2 2 . . . . . 2 . . 2 . . . . . . . 2 . . . . . . . . . . 2 . . . . . 
. . 2 . . . . . . . . . . . . . . . 2 . 2 . . . 2 . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 . . . . . 2 . . 2 . . . . . . . . 2 . . . . . . . . 2 . . . . . . 
. . 2 . . . . . . . . . . . . 2 . 2 2 . 2 . . . 2 . . . . . . . 2 . . 2 2 2 2 2 2 2 2 . . 2 2 . . . . . 2 . . 2 . . . . . . . . . 2 . . . . . . 2 . . . . . . . 
. . 2 . . . . . . . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 2 2 2 . . 2 2 2 2 2 2 2 2 . . 2 2 2 2 . 2 2 2 . . 2 2 2 2 . . . . . . . 2 . . . . 2 . . . . . . . . 
. . 2 . . . 2 2 . . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 . . . . . . . . 2 2 . . . . . . . . 2 . 2 . . . . . . . 2 . . . . . . . . 2 . . 2 . . . . . . . . . 
. . 2 . . . 2 . 2 . . . 2 . . 2 . 2 2 . 2 . . . 2 . . . . 2 . . . . . . . . 2 2 . . . . . . . . 2 2 2 . . . . . . . 2 . . . . . . . . . 2 2 . . . . . . . . . . 
. . 2 . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . 2 . . 2 2 2 2 2 2 . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 . . . . . . . . 2 2 2 . . . . . . . 2 . . 2 2 . . . . 2 . 2 . . . . . . 2 . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 . . . . . . . . 2 . 2 2 . . . . . . 2 . . 2 . 2 . . . 2 . 2 . . . . . . . . . . 
. . 2 . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 2 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 . . 2 2 2 2 . . . 2 2 2 2 . . . . . . . . . . . . . . . 2 . . . 2 . 2 . . . . . . . . 2 . . . 
. . 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . . . 2 . . . 
. . . 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . 2 . . . . . . 2 . . . 
. . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.floorLight2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterNorth1,myTiles.tile1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark3,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,myTiles.tile2,sprites.dungeon.floorLightMoss,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth,sprites.dungeon.stairWest,sprites.dungeon.floorMixed,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,myTiles.tile3,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorDark4,sprites.dungeon.greenSwitchDown,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
for (let value of tiles.getTilesByType(myTiles.tile2)) {
    snake = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 6 f 6 6 f 6 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 7 7 7 7 6 f c . . 
. . . f c c c c c 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(snake, value)
    tiles.setTileAt(value, sprites.dungeon.floorDark2)
    snake_idle = animation.createAnimation(ActionKind.Idle, 1000)
    snake_idle.addAnimationFrame(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 6 6 6 6 6 6 7 7 7 c . . . 
. f 7 f f 6 6 f f 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`)
    snake_idle.addAnimationFrame(img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 6 6 6 6 6 6 7 7 7 c . . . . 
f 7 f f 6 6 f f 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`)
    animation.attachAnimation(snake, snake_idle)
    snake_alert_left = animation.createAnimation(ActionKind.walkleft, 200)
    snake_alert_left.addAnimationFrame(img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`)
    snake_alert_left.addAnimationFrame(img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`)
    animation.attachAnimation(snake, snake_alert_left)
    snake_alert_right = animation.createAnimation(ActionKind.Walking, 200)
    snake_alert_right.addAnimationFrame(img`
. . . . . . . c c c c c c . . . 
. . . . . . c 6 7 7 7 7 6 c . . 
. . . . . c 7 7 7 7 7 7 7 7 c . 
. . . . c 6 7 7 7 7 7 7 7 7 6 c 
. . . . c 7 7 7 c 6 6 6 6 c 7 c 
. . . . f 7 7 7 6 f 6 6 f 6 7 f 
. . . . f 7 7 7 7 7 7 7 7 7 7 f 
. . . . f 6 7 7 c 6 7 7 7 7 f . 
. . c c c f 6 7 7 c c c c f . . 
. c 7 7 7 c c f 7 7 7 2 6 c . . 
c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
. . c 6 6 6 6 6 6 1 1 1 1 1 c . 
. . c 6 6 6 6 6 1 1 1 1 1 6 c . 
. . c c 6 6 7 1 1 1 1 1 6 c . . 
. . . c c c c c c c c c c . . . 
`)
    snake_alert_right.addAnimationFrame(img`
. . . . c c c c c c c . . . . . 
. . . c 6 7 7 7 7 7 6 c . . . . 
. . c 6 7 c 6 6 6 6 c 7 c . . . 
. . c 7 7 6 f 6 6 f 6 7 6 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 7 7 6 1 f f 1 8 7 f . . 
. . f 7 7 7 f 1 f f 1 f 6 f . . 
. . f 6 7 7 f 2 2 2 2 f f . . . 
. . c f 6 7 7 2 2 2 2 f c c . . 
. c 7 7 c c 7 7 7 7 7 7 7 7 c . 
c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
. . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
. . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
. . . c 6 6 6 6 1 1 1 1 1 6 f . 
. . . . c c c c c c c c f f . . 
`)
    animation.attachAnimation(snake, snake_alert_right)
}
for (let value of tiles.getTilesByType(myTiles.tile3)) {
    snake = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 6 f 6 6 f 6 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 7 7 7 7 6 f c . . 
. . . f c c c c c 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(snake, value)
    tiles.setTileAt(value, sprites.dungeon.darkGroundCenter)
    snake_idle = animation.createAnimation(ActionKind.Idle, 1000)
    snake_idle.addAnimationFrame(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 6 6 6 6 6 6 7 7 7 c . . . 
. f 7 f f 6 6 f f 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`)
    snake_idle.addAnimationFrame(img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 6 6 6 6 6 6 7 7 7 c . . . . 
f 7 f f 6 6 f f 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`)
    animation.attachAnimation(snake, snake_idle)
    snake_alert_left = animation.createAnimation(ActionKind.walkleft, 200)
    snake_alert_left.addAnimationFrame(img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`)
    snake_alert_left.addAnimationFrame(img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`)
    animation.attachAnimation(snake, snake_alert_left)
    snake_alert_right = animation.createAnimation(ActionKind.Walking, 200)
    snake_alert_right.addAnimationFrame(img`
. . . . . . . c c c c c c . . . 
. . . . . . c 6 7 7 7 7 6 c . . 
. . . . . c 7 7 7 7 7 7 7 7 c . 
. . . . c 6 7 7 7 7 7 7 7 7 6 c 
. . . . c 7 7 7 c 6 6 6 6 c 7 c 
. . . . f 7 7 7 6 f 6 6 f 6 7 f 
. . . . f 7 7 7 7 7 7 7 7 7 7 f 
. . . . f 6 7 7 c 6 7 7 7 7 f . 
. . c c c f 6 7 7 c c c c f . . 
. c 7 7 7 c c f 7 7 7 2 6 c . . 
c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
. . c 6 6 6 6 6 6 1 1 1 1 1 c . 
. . c 6 6 6 6 6 1 1 1 1 1 6 c . 
. . c c 6 6 7 1 1 1 1 1 6 c . . 
. . . c c c c c c c c c c . . . 
`)
    snake_alert_right.addAnimationFrame(img`
. . . . c c c c c c c . . . . . 
. . . c 6 7 7 7 7 7 6 c . . . . 
. . c 6 7 c 6 6 6 6 c 7 c . . . 
. . c 7 7 6 f 6 6 f 6 7 6 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 7 7 6 1 f f 1 8 7 f . . 
. . f 7 7 7 f 1 f f 1 f 6 f . . 
. . f 6 7 7 f 2 2 2 2 f f . . . 
. . c f 6 7 7 2 2 2 2 f c c . . 
. c 7 7 c c 7 7 7 7 7 7 7 7 c . 
c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
. . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
. . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
. . . c 6 6 6 6 1 1 1 1 1 6 f . 
. . . . c c c c c c c c f f . . 
`)
    animation.attachAnimation(snake, snake_alert_right)
}
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
sword2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.sword)
unhurtable = 0
swingsword = 0
speed = 70
vertical = -1
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight2)
scene.cameraFollowSprite(mySprite)
player_anim()
snake_anim()
game.onUpdate(function () {
    controller.moveSprite(mySprite, speed, speed)
    if (mySprite.vx > 0) {
        vertical = 0
        horizontal = 1
    }
    if (mySprite.vx < 0) {
        vertical = 0
        // IZZUNS FOREVER
        horizontal = -1
    }
    if (mySprite.vy < 0) {
        vertical = -1
        horizontal = 0
    }
    if (mySprite.vy > 0) {
        vertical = 1
        horizontal = 0
    }
    if (swingsword == 0) {
        if (horizontal == 1) {
            if (mySprite.vx != 0) {
                animation.setAction(mySprite, ActionKind.walkright)
            } else {
                animation.setAction(mySprite, ActionKind.idle_right)
            }
        }
        if (horizontal == -1) {
            if (mySprite.vx != 0) {
                animation.setAction(mySprite, ActionKind.walkleft)
            } else {
                animation.setAction(mySprite, ActionKind.idle_left)
            }
        }
        if (vertical == -1) {
            if (mySprite.vy != 0) {
                animation.setAction(mySprite, ActionKind.walkup)
            } else {
                animation.setAction(mySprite, ActionKind.idle_up)
            }
        }
        if (vertical == 1) {
            if (mySprite.vy != 0) {
                animation.setAction(mySprite, ActionKind.walkdown)
            } else {
                animation.setAction(mySprite, ActionKind.idle_down)
            }
        }
    }
})
game.onUpdate(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (mySprite.y < value2.y + 56 && mySprite.x < value2.x + 56 && (mySprite.y > value2.y - 56 && mySprite.x > value2.x - 56)) {
            value2.follow(mySprite, 30)
        }
        if (value2.vx == 0 && value2.vy == 0) {
            animation.setAction(value2, ActionKind.Idle)
        } else {
            if (value2.vx < 0) {
                animation.setAction(value2, ActionKind.walkleft)
            } else {
                animation.setAction(value2, ActionKind.Walking)
            }
        }
    }
})
game.onUpdate(function () {
    if (swingsword == 1) {
        if (horizontal == -1) {
            sword2.right = mySprite.left
            mySprite.setImage(img`
. . . . . . f f . . . . . . . . 
. . . . f f 2 f f f f . . . . . 
. . . f f 2 f e e e e f f . . . 
. . f f 2 2 f e e e e e f f . . 
. . f e e e e f f e e e e f . . 
. f e 2 2 2 2 e e f f f f f . . 
. f 2 e f f f f 2 2 2 e f f f . 
. f f f e e e f f f f f f f f . 
. f e e 4 4 f b e 4 4 e f e f . 
. c f e d d f b 4 d 4 e e f . . 
c c . e e d d d 4 e e e f . . . 
1 c e d d e e 2 2 2 2 f . . . . 
c c e d d 4 4 e 4 4 4 f . . . . 
. c . e e e e f f f f f . . . . 
. . . . . f f f f f f f f . . . 
. . . . . . f f . . f f f . . . 
`)
            sword2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . c c c c c . . . . . . . 
. . . c 9 c 1 1 1 c c c c . . . 
. . c 1 1 1 c 1 1 1 1 1 1 c c c 
. c 9 1 1 1 1 c 1 1 1 1 1 1 1 9 
. . c d 1 1 c 1 1 1 9 d d c c c 
. . . c 9 c d 1 1 c c c c . . . 
. . . . c c c c c . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            sword2.y = mySprite.y
        }
        if (horizontal == 1) {
            sword2.left = mySprite.right
            mySprite.setImage(img`
. . . . . . . . f f . . . . . . 
. . . . . f f f f 2 f f . . . . 
. . . f f e e e e f 2 f f . . . 
. . f f e e e e e f 2 2 f f . . 
. . f e e e e f f e e e e f . . 
. . f f f f f e e 2 2 2 2 e f . 
. f f f e 2 2 2 f f f f e 2 f . 
. f f f f f f f f e e e f f f . 
. f e f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 b f d d e f c . 
. . . f e e e 4 d d d e e . c c 
. . . . f 2 2 2 2 e e d d e c 1 
. . . . f 4 4 4 e 4 4 d d e c c 
. . . . f f f f f e e e e . c . 
. . . f f f f f f f f . . . . . 
. . . f f f . . f f . . . . . . 
`)
            sword2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c . . . . 
. . . c c c c 1 1 1 c 9 c . . . 
c c c 1 1 1 1 1 1 c 1 1 1 c . . 
9 1 1 1 1 1 1 1 c 1 1 1 1 9 c . 
c c c d d 9 1 1 1 c 1 1 d c . . 
. . . c c c c 1 1 d c 9 c . . . 
. . . . . . . c c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            sword2.y = mySprite.y
        }
        if (vertical == 1) {
            sword2.top = mySprite.bottom
            mySprite.setImage(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 2 2 f f . . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f 2 2 2 2 2 2 f f f . . 
. . f f f 2 2 2 2 2 2 f f f . . 
. . f e e e e e e e e e e f f . 
. . f e 2 2 2 2 2 2 2 2 e f f . 
. . f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f f . 
. . f e 4 1 f d d f 1 4 e f . . 
. . f f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 2 f 4 e . . . 
. . f 4 f 4 4 5 5 4 f 4 e . . . 
. . . . f f f f f f d d e . . . 
. . . . . f f f f e d d e . . . 
. . . . . . . . . . e e . . . . 
`)
            sword2.setImage(img`
. . . . . . . c c c c c . . . . 
. . . . . . c c b b b c c . . . 
. . . . . . . c c c c c . . . . 
. . . . . . . . c d c . . . . . 
. . . . . . . . c 1 c . . . . . 
. . . . . . . c 1 1 9 c . . . . 
. . . . . . . c 1 1 d c . . . . 
. . . . . . . c 1 1 1 c . . . . 
. . . . . . c 1 1 1 1 9 c . . . 
. . . . . . c 1 1 c 1 1 c . . . 
. . . . . . c 1 c 1 c 1 c . . . 
. . . . . . c c 1 1 1 c c . . . 
. . . . . . . c 1 1 d c . . . . 
. . . . . . . c 1 1 9 c . . . . 
. . . . . . . . c 9 c . . . . . 
. . . . . . . . . c . . . . . . 
`)
            sword2.x = mySprite.x
        }
        if (vertical == -1) {
            sword2.bottom = mySprite.top
            mySprite.setImage(img`
. . . . d 1 f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . . . f f f f f f f f 4 e . . 
. . . . f 2 2 2 2 2 2 f d 4 . . 
. . . . f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
            sword2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . c 1 c . . . . . . . 
. . . . . c 1 1 9 c . . . . . . 
. . . . c 1 1 1 1 9 c . . . . . 
. . . . c c 1 1 1 c c . . . . . 
. . . . c 1 c 1 c 9 c . . . . . 
. . . . c 1 1 c d d c . . . . . 
. . . . . c 1 1 9 c . . . . . . 
. . . . . c 1 1 d c . . . . . . 
. . . . . c 1 1 1 c . . . . . . 
. . . . . c 1 1 d c . . . . . . 
. . . . . . c d c . . . . . . . 
. . . . . c c 9 c c . . . . . . 
. . . . c c c c c c c . . . . . 
`)
            sword2.x = mySprite.x
        }
    }
})
forever(function () {
    if (unhurtable == 1) {
        mySprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        mySprite.setFlag(SpriteFlag.Invisible, false)
        pause(100)
    }
})
