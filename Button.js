const BaseButton = props => {
  const { loading, color, visible, ...rest } = props;
  if (visible === false) {
    return null;
  }
  const content = (
    <StyledButton disabled={loading} color={color || 'default'} {...rest}>
      {props.children || props.text}
      {props.loading && <CircularProgress size={14} />}
    </StyledButton>
  );
};
