import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Yana", text: "Some text is the best!" },
  { id: "q2", author: "Yoshi", text: "Bau Bau Mya Mya!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
