<header class="header">
    <h1 class="logo header__logo"><a class="logo__link" href="<?php echo home_url()?>"><?php wp_title() ?></a></h1>
    <div class="header_menu menu">
        <nav class="menu__nav">
            <?php wp_nav_menu( array( 
                'theme_location' => 'header-menu', 
                'menu_class'=>"menu__list list list--numbers",
                'container' => "" ) ); ?>
                <?= wp_get_attachment_image('178', 'hero', false, array('class' => 'img menu__img')); ?>
        </nav>
        <button class="btn menu__btn">Menu</button>
    </div>
</header>
