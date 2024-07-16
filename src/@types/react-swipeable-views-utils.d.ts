declare module 'react-swipeable-views-utils' {
    import { ComponentType } from 'react';
    import { SwipeableViewsProps } from 'react-swipeable-views';
  
    export function autoPlay(
      component: ComponentType<SwipeableViewsProps>
    ): ComponentType<SwipeableViewsProps>;
  }