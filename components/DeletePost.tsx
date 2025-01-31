import Button from "./Button";
import ModalCard from "./Modal";

interface DeleteProps {
  modal: boolean;
  handleModal: () => void;
  handleSubmit: (e?: string) => void;
  loading?: boolean;
}
export const DeletePost = ({
  modal,
  handleModal,
  handleSubmit,
  loading,
}: DeleteProps): JSX.Element => (
  <ModalCard setOpen={handleModal} open={modal}>
    <>
      <h2 className="font-bold text-xl"> Delete Post</h2>
      <hr className="my-5" />
        <p className="text-sm text-center mt-6">
          Are you sure you want to <b>“delete” </b>this post.
        </p>
        <div className="flex">
          <Button
            onClick={handleModal}
            label="Cancel"
            styles="!text-[#898989] text-sm border-[1px] border-[#CDCDCD] rounded mt-4"
            loading={false}
          />
          <Button
            onClick={handleSubmit}
            label="Delete"
            styles="bg-[#FF0E00] text-sm rounded mt-4"
            loading={loading}
          />
      </div>
    </>
  </ModalCard>
);
