import React from "react";
import { gql, useMutation, useReactiveVar, ReactiveVar } from "@apollo/client";
import { RefetchInteractiveCommentList } from "../List/Controller";
import { RefetchInteractiveItem } from "../../Item/Controller";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCommentCreateInput) {
    createInteractiveComment(data: $data) {
      id
      content
    }
  }
`;

export default function CommentCreate({ UI, interactive }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE, {
    onCompleted: (data) => {
      /**
       * useReactiveVar return refetchInteractiveCommentList is a state
       * then, it make re-render this component
       */
      const refetchInteractiveItem = RefetchInteractiveItem();
      refetchInteractiveItem();
    },
  });
  const { createComment } = data;
  return (
    <UI
      loading={loading}
      error={error}
      on={on}
      createComment={createComment}
      interactive={interactive}
    />
  );
}
