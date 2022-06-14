## GSAP Animation

---

```
<h1>
  hello world
</h1>
```

```
body {
  background-color: ffffff
}
```

```
gsap.to("h1", {x:400})  // animates the element with a class of “h1” to an x position of 400.
```

If you do not specify a duration, gsap will use the default which is 0.5 seconds (500ms).

You can change the default duration using:

```
gsap.defaults({duration:1});
```

Behind the scenes gsap changes the target’s inline style during the animation.

For best performance animate CSS Transform values and opacity:

1. x

2. y

3. rotation

4. rotationX

5. rotationY

6. skewX and skewY

7. scaleX, scaleY, or just scale

GSAP can animate any numeric property you throw at it.

- width and height

- backgroundColor \*hyphenated values need to be camelCase

- color

- padding

- left and top (must set position to relative, absolute, or fixed)

- vh and vw

#### GSAP.from and GSAP.fromTo
