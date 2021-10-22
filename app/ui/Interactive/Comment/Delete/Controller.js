import React from "react";
import { gql, useMutation } from "@apollo/client";
import { RefetchInteractiveItem } from "../../Item/Controller";

export const COMMENT_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveComment(id: $id) {
      id
      content
    }
  }
`;

export default function CommentDelete({ UI, id }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_DELETE, {
    onCompleted: (data) => {
      const refetchInteractiveItem = RefetchInteractiveItem();
      refetchInteractiveItem();
    },
  });
  const { deleteInteractiveComment } = data;
  const clickDetete = () => {
    on({ variables: { id: id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      comment={deleteInteractiveComment}
    />
  );
}
