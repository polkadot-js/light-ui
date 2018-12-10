// Copyright 2017-2018 @polkadot/light-apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

type HOC = (Component: React.ComponentType<any>) => React.ComponentType<any>;

export function withMulti<T> (Component: React.ComponentType<any>, ...hocs: Array<HOC>): React.ComponentType<any> {
  // NOTE: Order is reversed so it makes sense in the props, i.e. component
  // after something can use the value of the preceding version
  return hocs
    .reverse()
    .reduce((Component, hoc) => {
      return hoc(Component);
    }, Component);
}
