import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import cs from "classnames";

type Props = {
  length: number;
  currentPage?: number;
  limit: number;
};

export const Pagination: React.FC<Props> = ({ length, limit = 2, currentPage = 5 }) => {

  const numberOfPages = Math.ceil(length / limit);

  const pages = [-1, 0, 1]

  const getPageToSubtract = () => {
    if (currentPage + 2 >= numberOfPages) {
      return numberOfPages - 2;
    } else if (currentPage - 2 <= 1) {
      return 3;
    } else {
      return currentPage;
    }
  }


  return (
    <div className="flex max-w-[320px] gap-3 p-bold py-5 items-center">
      <Link
        href={{
          query: { limit, page: currentPage - 1},
        }}
        aria-disabled={currentPage === numberOfPages}
        className={cs(currentPage === 1 && "pointer-events-none opacity-50")}
      >
        <BiLeftArrowAlt size={20} />
      </Link>

      <Link
        href={{
          query: { limit, page: 1},
        }}
        className={cs(
          "rounded-full flex items-center justify-center w-7 h-7",
          currentPage === 1 && "bg-wblue-500 text-white"
        )}
      >
        1
      </Link>
      {numberOfPages > 5
        ? pages.map((pageNum, index) => {
          const pageToSubtract = getPageToSubtract();
          console.log("pageToSubtract", pageToSubtract);
            return (
              <>
                {pageToSubtract + pageNum > 2 && index === 0 && <>...</>}
                <Link
                  key={index}
                  className={cs(
                    "rounded-full flex items-center justify-center w-7 h-7",
                    currentPage === pageToSubtract + pageNum &&
                      "bg-wblue-500 text-white"
                  )}
                  href={{
                    query: { limit, page: pageToSubtract + pageNum},
                  }}
                >
                  {pageToSubtract === 1
                    ? pageToSubtract + pageNum + 2
                    : pageToSubtract + pageNum}
                </Link>
                {pageToSubtract + pageNum + 1 < numberOfPages && index === 2 && (
                  <>...</>
                )}
              </>
            );
          })
        : pages.map((_, index) => {
            if (index + 2 < numberOfPages) {
              return (
                <Link
                  key={index}
                  className={cs(
                    "rounded-full flex items-center justify-center w-7 h-7",
                    currentPage === index + 2 && "bg-wblue-500 text-white"
                  )}
                  href={{
                    query: {limit, page: index + 2},
                  }}
                >
                  {index + 2}
                </Link>
              );
            }
          })}
      {numberOfPages > 1 && (
        <Link
          href={{
            query: { limit, page: numberOfPages},
          }}
          className={cs(
            "rounded-full flex items-center justify-center w-7 h-7",
            currentPage === numberOfPages && "bg-wblue-500 text-white"
          )}
        >
          {numberOfPages}
        </Link>
      )}

      <Link
        href={{
          query: { limit, page: currentPage + 1},
        }}
        aria-disabled={currentPage === numberOfPages}
        className={cs(
          currentPage === numberOfPages && "pointer-events-none opacity-50"
        )}
      >
        <BiRightArrowAlt size={20} />
      </Link>
    </div>
  );
};
