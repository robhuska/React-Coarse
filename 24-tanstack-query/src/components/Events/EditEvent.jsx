import {
  Link,
  useNavigate,
  useNavigation,
  useParams,
  redirect,
  useSubmit,
} from 'react-router-dom';
import {
  useQuery,
  //  useMutation
} from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { id } = useParams();
  const { state } = useNavigation();

  const { data, error, isError } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 5000,
  });

  // const {
  //   mutate,
  //   isPending: isPendingUpdating,
  //   isError: isErrorUpdating,
  //   error: updateError,
  // } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ['events', id] });
  //     const prevEvent = queryClient.getQueryData(['events', id]);
  //     queryClient.setQueryData(['events', id], newEvent);

  //     return {
  //       prevEvent,
  //     };
  //   },
  //   onError: (data, error, context) => {
  //     queryClient.setQueryData(['events', id], context.prevEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', id]);
  //   },
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries(['events', id]);
  //   //   navigate('../');
  //   // },
  // });

  function handleSubmit(formData) {
    // mutate({ id, event: formData });
    // navigate('../');

    submit(formData, {
      method: 'PUT',
    });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Error loading event"
          message={
            error.info?.message ||
            'An error occurred loading the event. Please try again later.'
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <>
        <EventForm inputData={data} onSubmit={handleSubmit}>
          {state === 'submitting' ? (
            <LoadingIndicator />
          ) : (
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Update
              </button>
            </>
          )}
        </EventForm>
        {/* {isErrorUpdating && (
          <ErrorBlock
            title="An error occurred"
            message={
              updateError.info?.message ||
              'An error occurred trying to update this event. Please try again later.'
            }
          /> */}
        )}
      </>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEvent = Object.fromEntries(formData);

  await updateEvent({ id: params.id, event: updatedEvent });
  await queryClient.invalidateQueries(['events']);

  return redirect('../');
}
