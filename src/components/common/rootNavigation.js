import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
import { StackActions } from '@react-navigation/native';

class RootNavigator {
  static navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }

  static setRoot(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  }

  static goBack() {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  }

  static pop(value) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop(value));
    }
  }

  static popToTop() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  }

  static openDrawer() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.openDrawer());
    }
  }

  static closeDrawer() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(DrawerActions.closeDrawer());
    }
  }
}

export { RootNavigator };
