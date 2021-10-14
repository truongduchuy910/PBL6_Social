import React from "react";
import { gql, useQuery } from "@apollo/client";
export const REACTION_LIST = gql`
  query($where: InteractiveReactionWhereInput) {
    _allInteractiveReactionsMeta(where: $where) {
      count
    }
    allInteractiveReactions(where: $where) {
      id
      emoji
    }
  }
`;
export default function ReactionListController({ UI, where }) {
  const { loading, error, data = {} } = useQuery(REACTION_LIST, {
    variables: { where },
  });
  const { allInteractiveReactions, _allInteractiveReactionsMeta } = data;
  return (
    <UI
      loading={loading}
      error={error}
      allReactions={allInteractiveReactions}
      _allReactionsMeta={_allInteractiveReactionsMeta}
    />
  );
}