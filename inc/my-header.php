<header class="header hidden">
    <h1 class="logo header__logo"><a class="logo__link" href="">Lua JACQMIN | Frontend developper & webdesigner junior</a></h1>
    <div class="header_menu menu">
        <nav class="menu__nav" data-deco-1="deco-5" data-deco-2="deco-1">
            <?php wp_nav_menu( array( 
                'theme_location' => 'header-menu', 
                'menu_class'=>"menu__list list list--numbers list--numbers-inverted",
                'container' => "" ) ); ?>
                <?= wp_get_attachment_image('178', 'hero', false, array('class' => 'img menu__img')); ?>
                <span class="deco-title">MENU</span>
        </nav>
        <button class="btn menu__btn">Menu</button>
    </div>
</header>
