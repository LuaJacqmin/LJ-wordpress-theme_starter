<?php get_header(); ?>
<section>
    <div class="slider" data-slider="slider1">
        <ul class="slider__list" data-slider="slider1">
            <li class="slider__element">this is a slider element</li>
        </ul>
        <div class="slider__nav">
            <span data-slider="slider1" data-direction="prev" class="slider__arrow slider__arrow--prev">Prev</span>
            <span data-slider="slider1" data-direction="next" class="slider__arrow slider__arrow--next">Next</span>
        </div>
    </div>
    <div class="slider" data-slider="slid2">
        <ul class="slider__list" data-slider="slid2">
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
            <li class="slider__element">this is a slider element</li>
        </ul>
        <div class="slider__nav">
            <span data-slider="slid2" data-direction="prev" class="slider__arrow slider__arrow--prev">Prev</span>
            <span data-slider="slid2" data-direction="next" class="slider__arrow slid2--next">Next</span>
        </div>
    </div>
</section>
<?php get_footer(); ?>