import * as React from 'react'

import { connect } from '../statmen'
import CounterStore from '../stores/CounterStore'
import TodoStore from '../stores/TodoStore'
import PageStore from '../stores/PageStore'

interface Props {
  [propName: string]: any
}

interface ConnectProps {
  pageStore: any
}

class Back extends React.Component<Props & ConnectProps> {
  back = () => {
    const { pageStore } = this.props
    pageStore.back()
  }

  render() {
    return <div onClick={this.back}>返回</div>
  }
}

const ConnectedBack = connect([CounterStore, TodoStore, PageStore])(Back)

export default ConnectedBack