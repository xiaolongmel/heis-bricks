import { computed } from 'vue'
import {  pick } from 'lodash-es'
import { TextComponentProps } from '@/defaultProps'

const useComponnetCommon = (props: Readonly<Partial<TextComponentProps & { isEditing: boolean }>>, picks: string[] ) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponnetCommon
